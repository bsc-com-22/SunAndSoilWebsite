import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ChevronRight, Globe, ArrowRight } from 'lucide-react';

// Import Assets
import HeroContactBg from '../assets/hero-contact.png';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kaphiri, Area 36",
      subDetails: "Lilongwe, Malawi",
      color: "text-primary",
      bg: "bg-primary/5"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "sunandsoilfoundation@gmail.com",
      subDetails: "General & Partnership Inquiries",
      color: "text-solar-dark",
      bg: "bg-solar/10"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+265 995 856 237",
      subDetails: "+265 888 655 069",
      color: "text-primary-dark",
      bg: "bg-primary-dark/5"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroContactBg}
            alt="Contact Sun & Soil"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/80 to-primary-dark/90"></div>
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8"
          >
            <span className="text-solar text-xs font-bold tracking-[0.3em] uppercase">Get in Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-8"
          >
            Let's Build <span className="gradient-text">Something Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed"
          >
            Whether you're interested in partnership opportunities or have questions about our work — we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark/5 to-transparent"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Contact Info</span>
                <h2 className="text-4xl font-bold mb-6">Reach Out</h2>
                <p className="text-xl text-gray-600">
                  We respond to all inquiries within 2-3 business days.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 p-8 bg-gray-50 rounded-[2rem] border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
                  >
                    <div className={`${info.bg} w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <info.icon className={`h-8 w-8 ${info.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-800 font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-gray-500">{info.subDetails}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-primary-dark rounded-[2.5rem] text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full group-hover:scale-110 transition-transform"></div>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-solar" />
                  </div>
                  <h3 className="text-xl font-bold">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">Monday - Friday</p>
                  <p className="text-xl font-bold">8:00 AM - 5:00 PM CAT</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white p-10 md:p-20 rounded-[3rem] border border-gray-100 shadow-2xl shadow-primary/5"
            >
              <div className="flex items-center gap-5 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Send a Message</h2>
              </div>

              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Subject</label>
                  <div className="relative">
                    <select
                      required
                      className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all appearance-none cursor-pointer text-lg"
                    >
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Donation Question</option>
                      <option>Volunteer Interest</option>
                    </select>
                    <ChevronRight className="absolute right-8 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 rotate-90 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all resize-none text-lg"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full py-6 text-xl group">
                  Send Message
                  <Send className="ml-3 h-6 w-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] bg-gray-50 rounded-[3rem] border border-gray-100 flex items-center justify-center text-center p-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Headquarters</h3>
              <p className="text-xl text-gray-600 mb-8">Kaphiri, Area 36, Lilongwe, Malawi</p>
              <button className="btn btn-primary group">
                Get Directions
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
