import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

// Import Assets
import HeroAboutBg from '../assets/hero-about.png';
import AboutFarmer from '../assets/about-farmer.jpg';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroAboutBg}
            alt="Agriculture field"
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
            <span className="text-solar text-xs font-bold tracking-[0.3em] uppercase">Our Mission & Vision</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-8"
          >
            About <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed"
          >
            Dedicated to building a sustainable, food-secure future for Malawi through innovation and community partnership.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark/5 to-transparent"></div>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Story</span>
              <h2 className="mb-10 leading-tight">Born From a Vision of <span className="gradient-text">Self-Sufficiency</span></h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Sun & Soil Foundation was founded with a clear purpose: to support smallholder farmers, women, youths, and vulnerable groups in moving from climate-vulnerable subsistence farming toward productive, market-oriented, and resilient agricultural systems.
                </p>
                <p>
                  Our work combines renewable energy deployment, hands-on training, and inclusive enterprise development, aligned with Malawi Vision 2063. To date, we have enabled year-round production and improved household food security across Malawi.
                </p>
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
                  <Globe className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Global Alignment</h4>
                  <p className="text-sm text-gray-500">Contributing to UN SDGs and Malawi Vision 2063.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-solar/20 rounded-full blur-3xl"></div>
              <div className="img-overlay">
                <img
                  src={AboutFarmer}
                  alt="Malawian farmer"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[2.5rem] hidden md:block border-primary/20">
                <div className="text-4xl font-heading font-extrabold text-primary mb-2">100%</div>
                <p className="text-gray-800 font-bold">Solar Powered</p>
                <p className="text-gray-500 text-xs mt-2">Sustainable irrigation systems.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500">
                <Eye className="h-10 w-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="mb-6">Our Vision</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                A Malawi where every rural community is resilient, food secure, and economically thriving through sustainable agriculture and clean energy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card group"
            >
              <div className="bg-solar/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-solar transition-all duration-500">
                <Target className="h-10 w-10 text-solar-dark group-hover:text-primary-dark" />
              </div>
              <h3 className="mb-6">Our Mission</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                To empower smallholder farmers, especially women and youth, with solar irrigation technologies, climate-smart agricultural skills, and market linkages.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">What Guides Us</span>
            <h2 className="mb-8">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles shape every program we design and every partnership we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sustainability", desc: "Prioritizing long-term environmental health and economic viability.", icon: ShieldCheck },
              { title: "Inclusion", desc: "Ensuring women and youth are at the center of transformation.", icon: Globe },
              { title: "Innovation", desc: "Embracing new technologies to solve agricultural challenges.", icon: Target },
              { title: "Accountability", desc: "Transparent and responsible stewards of resources.", icon: CheckCircle },
              { title: "Empowerment", desc: "Equipping communities with tools and knowledge.", icon: ShieldCheck },
              { title: "Stewardship", desc: "Committed to protecting and restoring the environment.", icon: Globe }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <value.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{value.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
