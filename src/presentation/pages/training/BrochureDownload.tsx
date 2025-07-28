'use client';

import { Button } from '@/presentation/components/ui/button';
import { Input } from '@/presentation/components/ui/input';
import { text } from '@/shared/lib/typography';
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
    <section className="text-center bg-company-primary-royalBlue rounded-company-section-24 h-full w-company-section-width py-12">
      <h2 className="text-2xl font-semibold mb-4 text-white">Want the Full Robotics Brochure?</h2>
      <Button
        variant={'neumorphicYellow'}
        onClick={() => setIsOpen(true)}
      >
        Download Brochure
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#0000006b] z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-company-lg-24   -xl text-black">
            <h3 className={`${text.cardHeadingsmall}text-lg font-semibold`}>Enter your details to download</h3>
            <div className="space-y-company-lg-24">
              <Input
                type="text"
                placeholder="Your Name"
                className={`w-full  ${errors.name ? 'border-red-500' : ''}`}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="space-y-company-lg-24">
              <Input
                type="email"
                placeholder="Email Address"
                className={`w-full  ${errors.email ? 'border-red-500' : ''}`}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-company-lg-24">
              <Input
                type="tel"
                placeholder="Phone Number"
                className={`w-full  ${errors.phone ? 'border-red-500' : ''}`}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div className='flex  justify-center space-x-company-lg-24'>
            <Button
              variant={"neumorphic"}
              onClick={handleDownload}
            >
              Subscribe & Download
            </Button>
            <Button 
              variant={"destructive"}
              onClick={() => {
                setIsOpen(false);
                setErrors({});
              }}
            >
              Cancel
            </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
