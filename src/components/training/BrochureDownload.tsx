'use client';

import { useState } from 'react';

export default function BrochureDownload() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleDownload = () => {
    // You could send data to backend here
    setIsOpen(false);
    const link = document.createElement('a');
    link.href = '/robotics-brochure.pdf'; // Make sure this file exists in the public folder
    link.download = 'robotics-brochure.pdf';
    link.click();
  };

  return (
    <section className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Want the Full Robotics Brochure?</h2>
      <button
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        onClick={() => setIsOpen(true)}
      >
        Download Brochure
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#0000006b] z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4 shadow-xl text-black">
            <h3 className="text-lg font-semibold ">Enter your details to download</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-3 py-2 rounded  "
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-3 py-2 rounded"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border px-3 py-2 rounded"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <button
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              onClick={handleDownload}
            >
              Subscribe & Download
            </button>
            <button
              className="text-sm text-gray-500 underline mt-2"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
