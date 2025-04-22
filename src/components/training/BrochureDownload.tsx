'use client';

import { useState } from 'react';
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be 3 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().length(10, { message: "Phone number must be 10 digits" })
});

type FormData = z.infer<typeof formSchema>;

export default function BrochureDownload() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleDownload = () => {
    try {
      formSchema.parse(formData);
      
      setIsOpen(false);
      const link = document.createElement('a');
      link.href = '/robotics-brochure.pdf';
      link.download = 'robotics-brochure.pdf';
      link.click();
      

      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<FormData> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof FormData;
          newErrors[field] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Want the Full Robotics Brochure?</h2>
      <button
        className="px-6 py-3 bg-company-primary-royalBlue text-white rounded-lg hover:bg-blue-500 transition"
        onClick={() => setIsOpen(true)}
      >
        Download Brochure
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#0000006b] z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4   -xl text-black">
            <h3 className="text-lg font-semibold">Enter your details to download</h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full border px-3 py-2 rounded ${errors.name ? 'border-red-500' : ''}`}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full border px-3 py-2 rounded ${errors.email ? 'border-red-500' : ''}`}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <input
                type="tel"
                placeholder="Phone Number"
                className={`w-full border px-3 py-2 rounded ${errors.phone ? 'border-red-500' : ''}`}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <button
              className="w-full bg-company-primary-royalBlue text-white py-2 rounded hover:bg-blue-500 transition"
              onClick={handleDownload}
            >
              Subscribe & Download
            </button>
            <button
              className="text-sm text-red-400 mt-2"
              onClick={() => {
                setIsOpen(false);
                setErrors({});
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
