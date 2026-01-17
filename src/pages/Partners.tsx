import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Award, ShieldCheck, CheckCircle, ArrowRight, Heart } from 'lucide-react';

// Import Assets
import HeroPartnersBg from '../assets/hero-partners.png';
import Logo from '../assets/SUN AND SOIL LOGO.png';

const Partners = () => {
  const sdgs = [
    { number: '1', title: 'No Poverty', color: 'text-red-600', bg: 'bg-red-50' },
    { number: '2', title: 'Zero Hunger', color: 'text-orange-600', bg: 'bg-orange-50' },
    { number: '7', title: 'Clean Energy', color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { number: '13', title: 'Climate Action', color: 'text-green-600', bg: 'bg-green-50' }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroPartnersBg}
            alt="Sun & Soil Partners"
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
            <span className="text-solar text-xs font-bold tracking-[0.3em] uppercase">Working Together for Impact</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-8"
          >
            Partners & <span className="gradient-text">Alignment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Collaborating with global and national organizations to drive sustainable agricultural transformation in Malawi.
          </motion.p>
        </div>
      </section>

      {/* Alignment Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark/5 to-transparent"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Global Standards</span>
            <h2 className="mb-8">Global & National Goals</h2>
            <p className="text-xl text-gray-600">
              Our programs are designed to contribute to global, national, and ESG frameworks for sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* UN SDGs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-12 md:p-20"
            >
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mb-10">
                    <Globe className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">UN Sustainable Development Goals</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Contributing to multiple SDGs, with primary alignment to Goals 1, 2, 7, and 13.</p>
                </div>
                <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
                  {sdgs.map((sdg, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-3xl text-center border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                      <div className={`${sdg.bg} ${sdg.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black group-hover:scale-110 transition-transform`}>
                        {sdg.number}
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">SDG {sdg.number}</p>
                      <p className="text-sm font-bold text-gray-900 leading-tight">{sdg.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision 2063 & ESG */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="w-16 h-16 bg-solar/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-solar transition-all duration-500">
                  <Award className="h-8 w-8 text-solar-dark group-hover:text-primary-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Malawi Vision 2063</h3>
                <p className="text-gray-600 mb-10 leading-relaxed">Supporting long-term development through agricultural transformation and sustainability.</p>
                <div className="space-y-4">
                  {['Agricultural Productivity', 'Environmental Sustainability', 'Human Capital Development'].map((item) => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent group-hover:border-solar/20 transition-all">
                      <CheckCircle className="h-5 w-5 text-solar-dark" />
                      <span className="text-sm font-bold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500">
                  <ShieldCheck className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6">ESG Alignment</h3>
                <p className="text-gray-600 mb-10 leading-relaxed">Delivering measurable Environmental, Social, and Governance outcomes for our partners.</p>
                <div className="space-y-4">
                  {['Climate Adaptation', 'Community Empowerment', 'Transparent Reporting'].map((item) => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent group-hover:border-primary/20 transition-all">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm font-bold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Network</span>
            <h2 className="mb-8">Valued Partners</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white h-48 rounded-[2.5rem] flex items-center justify-center p-12 border border-transparent hover:border-primary/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 group"
              >
                <img src={Logo} alt="Partner Logo" className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="card bg-primary-dark p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>

            <div className="max-w-3xl mx-auto relative z-10 space-y-10">
              <h2 className="text-white mb-8">Join Our Network</h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Partner with us to drive sustainable agricultural transformation in Malawi. Together, we can create lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="btn btn-solar px-12 py-5 text-lg group">
                  Become a Partner
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/donate" className="btn btn-glass px-12 py-5 text-lg group">
                  <Heart className="mr-3 h-6 w-6 fill-current group-hover:scale-110 transition-transform" />
                  Support Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
