import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Droplets, Sprout, Users, TrendingUp, Heart, CheckCircle, Award, Target, Zap, MapPin } from 'lucide-react';

// Import Assets
import HeroBg from '../assets/hero-farming.jpg';
import AboutFarmer from '../assets/about-farmer.jpg';
import ProgramSolar from '../assets/program-solar.jpg';
import ProgramTraining from '../assets/program-training.jpg';
import ProgramWomen from '../assets/program-women.jpg';

const Home = () => {
  const stats = [
    { label: 'Farmers Supported', value: '10', icon: Users },
    { label: 'People Trained', value: '85', icon: Award },
    { label: 'Solar Powered', value: '100%', icon: Zap },
    { label: 'Target by 2030', value: '50K', icon: Target }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroBg}
            alt="Solar powered irrigation in Malawi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-solar/20 backdrop-blur-md border border-solar/30 px-4 py-2 rounded-full mb-6"
            >
              <Sun className="h-5 w-5 text-solar" />
              <span className="text-solar font-bold tracking-wider text-sm uppercase">Powering Malawi's Food Future</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
              Sustainable Energy for <span className="text-solar">Self-Sufficient</span> Communities
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed max-w-2xl">
              Moving smallholder farmers from climate-vulnerable subsistence to productive, market-oriented agricultural systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/donate"
                className="bg-solar hover:bg-solar-dark text-primary-dark font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-xl flex items-center justify-center group"
              >
                <Heart className="mr-2 h-5 w-5 fill-current" />
                Donate Now
              </Link>
              <Link
                to="/programs"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-10 rounded-full transition-all duration-300 flex items-center justify-center group"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl shadow-2xl text-center border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Story Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-solar/20 rounded-3xl z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-3xl z-0"></div>
              <img
                src={AboutFarmer}
                alt="Malawian woman farmer"
                className="relative z-10 rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-10 left-10 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-white">
                <p className="text-primary font-bold text-lg mb-1">Impact Driven</p>
                <p className="text-gray-600 text-sm">Empowering over 85 people through technical and business training.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h4 className="text-primary font-bold tracking-wider uppercase mb-4 flex items-center">
                <span className="w-8 h-1 bg-primary mr-3"></span>
                Our Story
              </h4>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-8 leading-tight">
                Born From a Vision of <span className="text-primary">Self-Sufficiency</span>
              </h2>
              <p className="text-gray-600 mb-6 text-xl leading-relaxed">
                Sun & Soil Foundation was founded to support smallholder farmers in moving from climate-vulnerable subsistence farming toward productive, market-oriented systems.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Our work combines renewable energy deployment, hands-on training, and inclusive enterprise development, aligned with Malawi Vision 2063 and the Sustainable Development Goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Renewable Energy Deployment</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Inclusive Enterprise Development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Hands-on Technical Training</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Market Linkages & Support</span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg group"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-4">What We Do</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
              Integrated Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Addressing the interconnected challenges facing rural communities — from water access to skills development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sun className="h-10 w-10 text-white" />,
                title: "Solar Irrigation",
                color: "bg-solar",
                desc: "Harnessing clean energy for year-round production."
              },
              {
                icon: <Sprout className="h-10 w-10 text-white" />,
                title: "Climate-Smart Ag",
                color: "bg-primary",
                desc: "Promoting sustainable techniques for soil health."
              },
              {
                icon: <Users className="h-10 w-10 text-white" />,
                title: "Capacity Building",
                color: "bg-earth",
                desc: "Practical training for market-oriented producers."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-white" />,
                title: "Empowerment",
                color: "bg-primary-dark",
                desc: "Skills and financing for women and youth."
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group"
              >
                <div className={`${program.color} p-8 flex justify-center`}>
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{program.desc}</p>
                  <Link to="/programs" className="text-primary font-bold inline-flex items-center text-sm group-hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-4">Real Impact</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              See how our solar-powered solutions are transforming lives across Malawi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rice Farming Initiative',
                location: 'Nkhata Bay',
                desc: 'Reliable water access for consistent rice production.',
                image: ProgramSolar
              },
              {
                title: 'Mixed Crop Irrigation',
                location: 'Nkhata Bay',
                desc: 'Enabling diverse crop production throughout the dry season.',
                image: ProgramTraining
              },
              {
                title: 'Large-Scale Maize',
                location: 'Jenda, Mzimba',
                desc: 'High-capacity solar irrigation for commercial maize farming.',
                image: ProgramWomen
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center shadow-sm">
                    <MapPin className="h-4 w-4 text-primary mr-2" />
                    <span className="text-xs font-bold text-gray-800">{project.location}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{project.desc}</p>
                  <Link to="/projects" className="text-primary font-bold inline-flex items-center text-sm group-hover:underline">
                    View Project Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center bg-neutral-light text-primary font-bold py-4 px-10 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Story Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-dark rounded-[3rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 rounded-l-full transform translate-x-1/4"></div>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-12 md:p-20 relative z-10">
                <div className="text-solar text-6xl font-serif mb-8">"</div>
                <h3 className="text-3xl md:text-4xl text-white font-heading font-bold mb-8 leading-tight">
                  Before the solar pump, I relied entirely on the rains. Now, I harvest three times a year.
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-solar"></div>
                  <div>
                    <p className="text-white font-bold text-xl">Mary Phiri</p>
                    <p className="text-solar font-medium">Nkhata Bay Farmer</p>
                  </div>
                </div>
                <div className="mt-12">
                  <Link
                    to="/projects"
                    className="inline-flex items-center text-white font-bold hover:text-solar transition-colors group"
                  >
                    Read More Success Stories
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 h-[400px] lg:h-[600px] w-full">
                <img
                  src={ProgramWomen}
                  alt="Mary Phiri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                Help Expand Our Reach
              </h2>
              <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
                Partner with us to bring these vital programs to more communities across Malawi. Your support creates measurable change.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/donate"
                  className="bg-solar hover:bg-solar-dark text-primary-dark font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-1 flex items-center justify-center text-lg"
                >
                  <Heart className="mr-2 h-6 w-6 fill-current" />
                  Donate Now
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-primary font-bold py-5 px-12 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:-translate-y-1 flex items-center justify-center text-lg"
                >
                  Become a Partner
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
