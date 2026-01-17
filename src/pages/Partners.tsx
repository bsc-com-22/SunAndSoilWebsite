import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

// Import Assets
import HeroPartnersBg from '../assets/hero-partners.png';
import Logo from '../assets/SUN AND SOIL LOGO.png';

const Partners = () => {
  const sdgs = [
    { number: '1', title: 'No Poverty', color: 'bg-red-600' },
    { number: '2', title: 'Zero Hunger', color: 'bg-yellow-600' },
    { number: '7', title: 'Affordable & Clean Energy', color: 'bg-yellow-500' },
    { number: '13', title: 'Climate Action', color: 'bg-green-700' }
  ];

  const visionPillars = [
    'Agricultural Productivity',
    'Environmental Sustainability',
    'Human Capital Development'
  ];

  const esgOutcomes = [
    'Climate mitigation & adaptation',
    'Community empowerment',
    'Transparent reporting'
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroPartnersBg}
            alt="Sun & Soil Partners"
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
            Partners & <span className="text-solar">Alignment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto mb-4"
          >
            Working Together for Greater Impact
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            We collaborate with development partners, government agencies, and private sector organizations who share our commitment to sustainable rural development.
          </motion.p>
        </div>
      </section>

      {/* Alignment Section Header */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-4 flex items-center justify-center">
              <span className="w-8 h-1 bg-primary mr-3"></span>
              Alignment
              <span className="w-8 h-1 bg-primary ml-3"></span>
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">Global & National Goals</h2>
            <p className="text-xl text-gray-600">
              Our programs are designed to contribute to global, national, and ESG frameworks for sustainable development.
            </p>
          </div>

          <div className="space-y-12">
            {/* UN SDGs Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-light rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3">
                  <div className="bg-white p-8 rounded-3xl shadow-lg inline-block mb-6">
                    <Globe className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">UN Sustainable Development Goals</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Our work contributes to multiple SDGs, with primary alignment to Goals 2, 7, and 13.</p>
                </div>

                <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {sdgs.map((sdg, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                      <div className={`${sdg.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform`}>
                        {sdg.number}
                      </div>
                      <p className="text-sm font-bold text-gray-800 leading-tight">
                        SDG {sdg.number}<br />
                        <span className="text-xs font-medium text-gray-500">{sdg.title}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Malawi Vision 2063 Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3">
                  <div className="bg-neutral-light p-8 rounded-3xl shadow-lg inline-block mb-6">
                    <Award className="h-12 w-12 text-solar-dark" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">Malawi Vision 2063</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">We support Malawi's long-term development vision through agricultural transformation and sustainability.</p>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {visionPillars.map((pillar, index) => (
                    <div key={index} className="bg-neutral-light rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
                      <div className="bg-white p-3 rounded-full mb-4 group-hover:bg-solar transition-colors">
                        <CheckCircle className="h-6 w-6 text-solar-dark" />
                      </div>
                      <p className="font-bold text-gray-800">{pillar}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ESG Alignment Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-light rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3">
                  <div className="bg-white p-8 rounded-3xl shadow-lg inline-block mb-6">
                    <ShieldCheck className="h-12 w-12 text-earth" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">ESG Alignment</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Our programs deliver measurable Environmental, Social, and Governance outcomes for our partners.</p>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {esgOutcomes.map((outcome, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
                      <div className="bg-neutral-light p-3 rounded-full mb-4 group-hover:bg-earth group-hover:text-white transition-all">
                        <CheckCircle className="h-6 w-6 text-earth group-hover:text-white" />
                      </div>
                      <p className="font-bold text-gray-800">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-4">Our Network</h4>
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">Valued Partners</h2>
            <p className="text-xl text-gray-600">
              We are proud to work with organizations that share our vision for a food-secure Malawi.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-light h-40 rounded-3xl flex items-center justify-center shadow-md hover:shadow-2xl transition-all duration-500 p-10 group"
              >
                <img
                  src={Logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="bg-primary-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-20 rounded-full -mr-32 -mt-32"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 relative z-10">Join Our Network</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto relative z-10">
              Partner with us to drive sustainable agricultural transformation in Malawi. Together, we can create lasting impact.
            </p>
            <button className="bg-solar hover:bg-solar-dark text-primary-dark font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-1 inline-flex items-center group relative z-10 text-lg">
              Become a Partner
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
