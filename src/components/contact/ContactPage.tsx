"use client";
import { useState } from "react";
import { text } from "@/lib/typography";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-8 lg:px-16 bg-company-blue-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className={`${text.Sectiontext} text-company-blue mb-6`}>Contact Us</h1>
          <p className={`${text.Sectionbodytext} text-company-gray max-w-2xl mx-auto`}>
            Have questions or want to learn more about our services? We&apos;d love to hear from you.
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className={`${text.cardDisplaytext} block text-company-gray mb-3`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-company-blue focus:border-transparent text-company-gray"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={`${text.cardDisplaytext} block text-company-gray mb-3`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-company-blue focus:border-transparent text-company-gray"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className={`${text.cardDisplaytext} block text-company-gray mb-3`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-company-blue focus:border-transparent text-company-gray"
                />
              </div>

              <div>
                <label htmlFor="message" className={`${text.cardDisplaytext} block text-company-gray mb-3`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-company-blue focus:border-transparent text-company-gray"
                  required
                />
              </div>

              <button
                type="submit"
                className={`${text.Buttontext} w-full bg-company-blue text-white py-4 px-6 rounded-lg hover:bg-company-blue-dark transition-colors duration-200`}
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className={`${text.cardHeadingtext} text-company-blue mb-6`}>Get in Touch</h2>
              <p className={`${text.cardBodytext} text-company-gray`}>
                We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </div>

            <div>
              <h3 className={`${text.cardHeadingtext} text-company-blue mb-4`}>Office Location</h3>
              <p className={`${text.cardBodytext} text-company-gray`}>
                123 Business Street<br />
                Suite 100<br />
                City, State 12345
              </p>
            </div>

            <div>
              <h3 className={`${text.cardHeadingtext} text-company-blue mb-4`}>Contact Information</h3>
              <p className={`${text.cardBodytext} text-company-gray`}>
                Email: info@vithsutra.com<br />
                Phone: (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 