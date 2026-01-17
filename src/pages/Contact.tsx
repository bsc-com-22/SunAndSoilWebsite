import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight } from 'lucide-react';

// Import Assets
import HeroContactBg from '../assets/hero-contact.png';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "Kaphiri, Area 36",
      subDetails: "Lilongwe, Malawi",
      color: "bg-primary"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "sunandsoilfoundation@gmail.com",
      subDetails: "General & Partnership Inquiries",
      color: "bg-solar"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+265 995 856 237",
      subDetails: "+265 888 655 069",
      color: "bg-earth"
    }
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroContactBg}
            alt="Contact Sun & Soil"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Let's Build <span className="text-solar">Something Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-200"
          >
            Whether you're interested in partnership opportunities, have questions about our programs, or want to learn more about our work — we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Left Column: Contact Cards */}
              <div className="lg:col-span-1 space-y-6">
                <div className="mb-8">
                  <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">Get in Touch</h2>
                  <p className="text-gray-600">
                    We respond to all inquiries within 2-3 business days. For urgent matters, please call our office directly.
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-neutral-light p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`${info.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                    <p className="text-gray-800 font-medium">{info.details}</p>
                    <p className="text-gray-500 text-sm">{info.subDetails}</p>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-primary-dark p-8 rounded-3xl text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary opacity-20 rounded-bl-full"></div>
                  <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-solar mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Monday - Friday</p>
                      <p className="text-gray-300 text-sm">8:00 AM - 5:00 PM CAT</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-50"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-heading font-bold text-gray-800">Send a Message</h2>
                </div>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Subject *</label>
                    <select
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Donation Question</option>
                      <option>Volunteer Interest</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Message *</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all duration-300 resize-none"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Send Message
                    <Send className="ml-3 h-5 w-5" />
                  </button>
                </form>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto h-[450px] rounded-[3rem] overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white p-6 rounded-full shadow-xl mb-4 inline-block animate-bounce">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Headquarters</h3>
                <p className="text-gray-600">Kaphiri, Area 36, Lilongwe, Malawi</p>
              </div>
            </div>
            {/* Placeholder for actual map integration */}
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
