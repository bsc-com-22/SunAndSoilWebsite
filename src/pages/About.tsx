import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

// Import Assets
import HeroAboutBg from '../assets/hero-about.png';
import AboutFarmer from '../assets/about-farmer.jpg';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroAboutBg}
            alt="Agriculture field"
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
            About <span className="text-solar">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-gray-200"
          >
            We are dedicated to building a sustainable, food-secure future for Malawi through innovation and community partnership.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h4 className="text-primary font-bold tracking-wider uppercase mb-4 flex items-center">
                <span className="w-8 h-1 bg-primary mr-3"></span>
                Our Story
              </h4>
              <h2 className="text-4xl font-heading font-bold text-gray-800 mb-8 leading-tight">
                Born From a Vision of <span className="text-primary">Self-Sufficiency</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Sun & Soil Foundation was founded with a clear purpose: to support smallholder farmers, women, youths, and vulnerable groups in moving from climate-vulnerable subsistence farming toward productive, market-oriented, and resilient agricultural systems.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our work combines renewable energy deployment, hands-on training, and inclusive enterprise development, aligned with Malawi Vision 2063, the Sustainable Development Goals (SDGs), and ESG principles. To date, we have implemented solar-powered irrigation installations and capacity-building programmes across Malawi, enabling year-round production and improved household food security.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-solar/20 rounded-3xl z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-3xl z-0"></div>
              <img
                src={AboutFarmer}
                alt="Malawian farmer"
                className="relative z-10 rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2rem] shadow-xl border-t-8 border-primary relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                A Malawi where every rural community is resilient, food secure, and economically thriving through sustainable agriculture and clean energy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-[2rem] shadow-xl border-t-8 border-solar relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-solar/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="bg-solar/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                <Target className="h-10 w-10 text-solar-dark" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower smallholder farmers, especially women and youth, with solar irrigation technologies, climate-smart agricultural skills, and market linkages to improve livelihoods and restore the environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-4">What Guides Us</h4>
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles shape every program we design and every partnership we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                desc: "We prioritize long-term environmental health and economic viability in all our interventions."
              },
              {
                title: "Inclusion",
                desc: "We ensure women, youth, and vulnerable groups are at the center of agricultural transformation."
              },
              {
                title: "Innovation",
                desc: "We embrace new technologies and methods to solve age-old agricultural challenges."
              },
              {
                title: "Accountability",
                desc: "We are transparent and responsible stewards of the resources entrusted to us."
              },
              {
                title: "Empowerment",
                desc: "We equip communities with the tools and knowledge to drive their own development."
              },
              {
                title: "Stewardship",
                desc: "We are committed to protecting and restoring the natural environment."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start p-8 bg-neutral-light rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="bg-primary/10 p-3 rounded-xl mr-5">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
