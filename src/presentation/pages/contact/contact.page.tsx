"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/presentation/components/ui/button.ui";
import { Input } from "@/presentation/components/ui/input.ui";
import { Textarea } from "@/presentation/components/ui/text_area.ui";
import Heading from "@/presentation/components/ui/heading.ui";
import { textReveal, formField } from "@/shared/lib/motion";
import useContact from "@/application/hooks/useContact";

export default function ContactPage() {
  const { formData, isSubmitting, handleChange, handleSubmit } =
    useContact();

  const onSubmit = async (e: React.FormEvent) => {
    const result = await handleSubmit(e);

    if (result.success) {
      toast.success("Message sent!");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="max-w-5xl w-full py-company-xl-48 md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-company-xl-48 ">
          {/* Contact Info */}
          <div className="space-y-6 m  h-full p-company-lg-24">
            <motion.div
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <Heading
                heading="CONTACT US"
                Display="It's time for Vithsutrait's"
              />
            </motion.div>
            <motion.div
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-company-blue">
                <Mail className="w-5 h-5 text-gray-500 mr-company-xs-8" />
                Get in Touch
              </h3>
              <p className="text-gray-600 pt-company-xs-8">
                We&apos;re here to help and answer any questions you might have.
              </p>
            </motion.div>

            <motion.div
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-company-blue">
                <MapPin className="w-5 h-5 text-gray-500 mr-company-xs-8" />
                Office Location
              </h3>
              <p className="text-gray-600 pt-company-xs-8">
                Mijar, Mangalore
                <br />
                Karnataka, India
              </p>
            </motion.div>

            <motion.div
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-company-blue">
                <Phone className="w-5 h-5 text-gray-500 mr-company-xs-8" />
                Contact Information
              </h3>
              <p className="text-gray-600 pt-company-xs-8">
                <span className="text-black">Email</span>: contact@vithsutra.com
                <br />
                <span className="text-black">Phone </span>: 91130 68170
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            variants={formField}
            initial="initial"
            animate="animate"
            onSubmit={onSubmit}
            className="bg-white flex flex-col justify-center  "
          >
            <Input
              type="text"
              name="name"
              label="Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              disabled={isSubmitting}
            />
            <Input
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
            />
            <Input
              type="tel"
              name="phone"
              label="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              disabled={isSubmitting}
            />
            <Textarea
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={4}
              required
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full  md:mx-company-lg-24"
              variant="neumorphic"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
            </Button>
          </motion.form>
       
        </div>
      </div>
    </div>
  );
}
