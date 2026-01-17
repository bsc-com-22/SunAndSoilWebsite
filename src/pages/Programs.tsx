import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Sprout, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

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
      subtitle: 'Solar-Powered Irrigation',
      icon: <Sun className="h-10 w-10 text-white" />,
      color: 'bg-solar',
      image: ProgramSolar,
      description: 'Harnessing clean energy to enable year-round agricultural production and reduce dependence on erratic rainfall.',
      features: [
        'Installation of solar pumps & drip systems',
        'Training on operation & maintenance',
        'Formation of water user associations'
      ]
    },
    {
      id: 'climate-smart',
      title: 'Climate-Smart Agriculture',
      subtitle: 'Climate-Smart Agriculture',
      icon: <Sprout className="h-10 w-10 text-white" />,
      color: 'bg-primary',
      image: ProgramTraining,
      description: 'Promoting sustainable farming techniques that improve soil health, increase yields, and strengthen climate resilience.',
      features: [
        'Soil health management & conservation',
        'Integrated pest management',
        'Crop diversification strategies'
      ]
    },
    {
      id: 'capacity-building',
      title: 'Capacity Building',
      subtitle: 'Capacity Building',
      icon: <Users className="h-10 w-10 text-white" />,
      color: 'bg-earth',
      image: AboutFarmer,
      description: 'Transforming beneficiaries from subsistence farmers into market-oriented producers through practical training.',
      features: [
        'Financial literacy & savings groups',
        'Leadership & governance training',
        'Market linkages & value addition'
      ]
    },
    {
      id: 'women-empowerment',
      title: 'Women & Youth Empowerment',
      subtitle: 'Women & Youth Empowerment',
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      color: 'bg-primary-dark',
      image: ProgramWomen,
      description: 'Empowering vulnerable groups with skills, enterprise development, and sustainable financing to create lasting change.',
      features: [
        "Women's entrepreneurship training",
        'Youth agribusiness skills development',
        'Access to micro-finance & resources'
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroProgramsBg}
            alt="Sun & Soil Programs"
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
            Our <span className="text-solar">Programs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto mb-4"
          >
            Integrated Solutions for Sustainable Change
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Our programs work together to address the interconnected challenges facing rural communities — from water access to skills development.
          </motion.p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-4 flex items-center justify-center">
              <span className="w-8 h-1 bg-primary mr-3"></span>
              What We Do
              <span className="w-8 h-1 bg-primary ml-3"></span>
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">Holistic Interventions</h2>
            <p className="text-xl text-gray-600">
              We take a multi-faceted approach to rural development, ensuring long-term sustainability and impact through integrated solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-50 hover:shadow-primary/10 transition-all duration-500 flex flex-col group"
              >
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-8 left-8 ${program.color} p-5 rounded-2xl shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                    {program.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-10 flex-grow">
                    <ul className="space-y-4">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-primary/10 p-1 rounded-full mr-4 mt-1">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full ${program.color} text-white font-bold py-5 px-8 rounded-2xl hover:opacity-90 transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-2xl transform hover:-translate-y-1`}>
                    Support This Program
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 relative z-10">Help Expand Our Reach</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto relative z-10">
              Partner with us to bring these vital programs to more communities across Malawi. Your support creates measurable change.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <button className="bg-white text-primary font-bold py-5 px-12 rounded-full hover:bg-solar hover:text-primary-dark transition-all duration-300 shadow-xl transform hover:-translate-y-1 text-lg">
                Become a Partner
              </button>
              <button className="bg-solar text-primary-dark font-bold py-5 px-12 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-xl transform hover:-translate-y-1 text-lg">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
