"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { text } from "@/lib/typography";
import Heading from "../ui/heading";
import { heroContent, textReveal, formField } from "@/lib/motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast.success('Your message has been sent successfully!');

      // Clear the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
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
        <motion.div
          variants={heroContent}
          initial="initial"
          animate="animate"
          className=" mb-16"
        >
          <Heading 
            heading={"Contact us"} 
            Display={"it's time for vithsutrait's time for vithsutra"}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-16">
        <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8"
            >
              <h2 className={`${text} text-company-blue mb-6 flex items-center gap-2`}>
                <Mail className="w-6 h-6 text-company-light-gray" />
                Get in Touch
              </h2>
              <p className={`${text.cardBodytext} text-company-gray`}>
                We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </motion.div>

            <motion.div
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8"
            >
              <h3 className={`${text} text-company-blue mb-4 flex items-center gap-2`}>
                <MapPin className="w-6 h text-company-light-gray" />
                Office Location
              </h3>
              <p className={`${text.cardBodytext} text-company-gray`}>
                123 Business Street<br />
                Suite 100<br />
                City, State 12345
              </p>
            </motion.div>

            <motion.div
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8"
            >
              <h3 className={`${text} text-company-blue mb-4 flex items-center gap-2`}>
                <Phone className="w-6 h- text-company-light-gray" />
                Contact Information
              </h3>
              <p className={`${text.cardBodytext} text-company-gray`}>
                Email: info@vithsutra.com<br />
                Phone: (123) 456-7890
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 md:p-10"
          >
            <motion.form
              variants={formField}
              initial="initial"
              animate="animate"
              onSubmit={handleSubmit}
              className="space-y-8 "
            >
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`${text.Buttontext} `}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </Button>
            </motion.form>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
} 