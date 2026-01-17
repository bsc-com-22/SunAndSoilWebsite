import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Sprout, Users, TrendingUp, CheckCircle, ArrowRight, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Assets
import HeroProgramsBg from '../assets/hero-programs.png';
import ProgramSolar from '../assets/program-solar.jpg';
import ProgramTraining from '../assets/program-training.jpg';
import ProgramWomen from '../assets/program-women.jpg';
import AboutFarmer from '../assets/about-farmer.jpg';

const Programs = () => {
  const programs = [
    {
      id: 'solar-irrigation',
      title: 'Solar-Powered Irrigation',
      icon: Sun,
      image: ProgramSolar,
      description: 'Harnessing clean energy to enable year-round agricultural production and reduce dependence on erratic rainfall.',
      features: [
        'Installation of solar pumps & drip systems',
        'Training on operation & maintenance',
        'Formation of water user associations'
      ],
      color: 'from-solar to-solar-dark'
    },
    {
      id: 'climate-smart',
      title: 'Climate-Smart Agriculture',
      icon: Sprout,
      image: ProgramTraining,
      description: 'Promoting sustainable farming techniques that improve soil health, increase yields, and strengthen climate resilience.',
      features: [
        'Soil health management & conservation',
        'Integrated pest management',
        'Crop diversification strategies'
      ],
      color: 'from-primary to-primary-dark'
    },
    {
      id: 'capacity-building',
      title: 'Capacity Building',
      icon: Users,
      image: AboutFarmer,
      description: 'Transforming beneficiaries from subsistence farmers into market-oriented producers through practical training.',
      features: [
        'Financial literacy & savings groups',
        'Leadership & governance training',
        'Market linkages & value addition'
      ],
      color: 'from-earth to-gray-900'
    },
    {
      id: 'women-empowerment',
      title: 'Women & Youth Empowerment',
      icon: TrendingUp,
      image: ProgramWomen,
      description: 'Empowering vulnerable groups with skills, enterprise development, and sustainable financing to create lasting change.',
      features: [
        "Women's entrepreneurship training",
        'Youth agribusiness skills development',
        'Access to micro-finance & resources'
      ],
      color: 'from-primary-dark to-black'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroProgramsBg}
            alt="Sun & Soil Programs"
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
            <span className="text-solar text-xs font-bold tracking-[0.3em] uppercase">Integrated Solutions</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-8"
          >
            Our <span className="gradient-text">Programs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Integrated solutions for sustainable change, addressing the interconnected challenges facing rural communities.
          </motion.p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-32">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${program.color} opacity-20 blur-2xl rounded-[3rem] group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="img-overlay relative z-10">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-8 ${index % 2 !== 0 ? '-left-8' : '-right-8'} glass p-8 rounded-[2rem] z-20 hidden md:block`}>
                    <program.icon className="h-12 w-12 text-primary mb-2" />
                    <p className="font-bold text-gray-900">Impact Driven</p>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center">
                      <program.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Program {index + 1}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{program.title}</h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-primary/10 transition-all">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-gray-700 font-medium text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link to="/donate" className="btn btn-primary group">
                      Support This Program
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <Link to="/contact" className="btn bg-gray-50 text-gray-700 hover:bg-gray-100">
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-white mb-8">Help Expand Our Reach</h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                Partner with us to bring these vital programs to more communities across Malawi. Your support creates measurable change.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="btn btn-primary px-12 py-5 text-lg group">
                  Become a Partner
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/donate" className="btn btn-solar px-12 py-5 text-lg group">
                  <Heart className="mr-3 h-6 w-6 fill-current group-hover:scale-110 transition-transform" />
                  Donate Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
