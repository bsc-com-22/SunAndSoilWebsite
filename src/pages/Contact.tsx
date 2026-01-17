import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

// Import Assets
import HeroContactBg from '../assets/hero-contact.png';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kaphiri, Area 36",
      subDetails: "Lilongwe, Malawi",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "sunandsoilfoundation@gmail.com",
      subDetails: "General & Partnership Inquiries",
      color: "text-solar-dark"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+265 995 856 237",
      subDetails: "+265 888 655 069",
      color: "text-primary-dark"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-primary-dark">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroContactBg}
            alt="Contact Sun & Soil"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-white mb-6">Let's Build <span className="text-solar">Something Together</span></h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Whether you're interested in partnership opportunities or have questions about our work — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  We respond to all inquiries within 2-3 business days.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <info.icon className={`h-6 w-6 ${info.color} shrink-0`} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-sm text-gray-800">{info.details}</p>
                      <p className="text-xs text-gray-500">{info.subDetails}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-primary-dark rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-solar" />
                  <h3 className="font-bold">Office Hours</h3>
                </div>
                <p className="text-sm text-gray-300">Monday - Friday</p>
                <p className="text-sm font-bold">8:00 AM - 5:00 PM CAT</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Send a Message</h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Subject</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Donation Question</option>
                    <option>Volunteer Interest</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none transition-all resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full py-4">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-24 bg-white">
        <div className="container-custom">
          <div className="h-80 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-center text-center p-8">
            <div>
              <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Headquarters</h3>
              <p className="text-gray-600">Kaphiri, Area 36, Lilongwe, Malawi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
