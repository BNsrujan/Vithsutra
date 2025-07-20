"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { text } from "@/lib/typography";
import Heading from "../../components/ui/heading";
import { heroContent, textReveal, formField } from "@/lib/motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Types
type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactInfo = {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
};

// Contact information data
const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-company-light-gray" />,
    title: "Get in Touch",
    content: "We're here to help and answer any questions you might have. We look forward to hearing from you."
  },
  {
    icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-company-light-gray" />,
    title: "Office Location",
    content: (
      <>
      Mijar,Mangalore
      <br />
      Karnataka,india 
      </>
    )
  },
  {
    icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-company-light-gray" />,
    title: "Contact Information",
    content: (
      <>
        Email: contact@vithsutra.com<br />
        Phone:91130 68170
      </>
    )
  }
];

// Form field configuration
const formFields = [
  { id: 'name', label: 'Name', type: 'text', required: true },
  { id: 'email', label: 'Email', type: 'email', required: true },
  { id: 'phone', label: 'Phone Number', type: 'tel', required: false },
  { id: 'message', label: 'Message', type: 'textarea', required: true }
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast.success('Your message has been sent successfully!');
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Reusable card component
  const ContactCard = ({ icon, title, content }: ContactInfo) => (
    <motion.div
      variants={textReveal}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="bg-company-white rounded-xl transition-shadow duration-300"
    >
      <h3 className={`${text.FooterHeadingtext} text-company-blue mb-4 flex items-center gap-2`}>
        {icon}
        {title}
      </h3>
      <p className={`${text.cardBodytext} text-company-gray`}>
        {content}
      </p>
    </motion.div>
  );

  // Reusable form field component
  const FormField = ({ id, label, type, required }: typeof formFields[0]) => (
    <div>
      {type === 'textarea' ? (
        <div>   
        <Textarea
          id={id}
          name={id}
          label={label}
          value={formData[id as keyof FormData]}
          onChange={handleChange}
          rows={4}
          placeholder={`Enter your ${label.toLowerCase()}`}
          required={required}
          disabled={isSubmitting}
        />
        </div>
      ) : (
        <Input
          type={type}
          id={id}
          name={id}
          label={label}
          value={formData[id as keyof FormData]}
          onChange={handleChange}
          placeholder={`Enter your ${label.toLowerCase()}`}
          required={required}
          disabled={isSubmitting}
        />
      )}
    </div>
  );

  return (
    <div className="flex justify-center content-center ">
      <div className="max-w-company-section-width pt-[70px]">
        
          <Heading 
            heading="CONTACT US" 
            Display="it's time for vithsutrait's "
          />
     

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 md:space-y-12"
          >
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </motion.div>

          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 sm:p-8 md:p-10  transition-shadow duration-300"
          >
            <motion.form
              variants={formField}
              initial="initial"
              animate="animate"
              onSubmit={handleSubmit}
              className=""
            >
              {formFields.map((field) => (
                <FormField key={field.id} {...field} />
              ))}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto mx-company-lg-24"
                variant={"neumorphic"}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 