import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Sprout, Users, Heart, MapPin, Award, Zap, Target, ChevronRight, Play } from 'lucide-react';

// Import Assets
import HeroBg from '../assets/hero-farming.jpg';
import AboutFarmer from '../assets/about-farmer.jpg';
import ProgramSolar from '../assets/program-solar.jpg';
import ProgramTraining from '../assets/program-training.jpg';
import ProgramWomen from '../assets/program-women.jpg';

const Home = () => {
  const stats = [
    { label: 'Farmers Supported', value: '10', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'People Trained', value: '85', icon: Award, color: 'text-primary', bg: 'bg-primary/5' },
    { label: 'Solar Powered', value: '100%', icon: Zap, color: 'text-solar-dark', bg: 'bg-solar/10' },
    { label: 'Target by 2030', value: '50K', icon: Target, color: 'text-red-500', bg: 'bg-red-50' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background with Parallax-like effect */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={HeroBg}
            alt="Solar powered irrigation in Malawi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2.5 rounded-full mb-10"
            >
              <div className="w-2 h-2 rounded-full bg-solar animate-pulse"></div>
              <span className="text-white text-xs font-bold tracking-[0.3em] uppercase">Powering Malawi's Food Future</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white mb-8 leading-[1.1] text-balance"
            >
              Sustainable Energy for <span className="gradient-text">Self-Sufficient</span> Communities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl text-balance"
            >
              Empowering smallholder farmers to transition from climate-vulnerable subsistence to productive, market-oriented agriculture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link to="/donate" className="btn btn-solar group">
                <Heart className="mr-3 h-6 w-6 fill-current group-hover:scale-110 transition-transform" />
                Donate Now
              </Link>
              <Link to="/programs" className="btn btn-glass group">
                Explore Programs
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 right-20 hidden lg:block"
        >
          <div className="glass p-8 rounded-[2.5rem] max-w-xs relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-solar rounded-2xl flex items-center justify-center shadow-xl">
              <Play className="h-6 w-6 text-primary-dark fill-current" />
            </div>
            <p className="text-gray-800 font-bold mb-2">Watch Our Impact</p>
            <p className="text-gray-500 text-sm">See how solar energy is transforming lives in rural Malawi.</p>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-20">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-50 flex flex-col items-center text-center group hover:border-primary/20 transition-all duration-500"
              >
                <div className={`${stat.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-heading font-extrabold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-solar/10 rounded-full blur-3xl"></div>
              <div className="img-overlay">
                <img
                  src={AboutFarmer}
                  alt="Malawian woman farmer"
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[2.5rem] max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">85+</div>
                  <p className="font-bold text-gray-800">People Trained</p>
                </div>
                <p className="text-gray-500 text-sm">Empowering communities through technical and business training.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Story</span>
              <h2 className="mb-10 leading-tight">
                Born From a Vision of <span className="gradient-text">Self-Sufficiency</span>
              </h2>
              <p className="text-gray-600 mb-8 text-xl leading-relaxed">
                Sun & Soil Foundation supports smallholder farmers in moving from climate-vulnerable subsistence farming toward productive, market-oriented systems.
              </p>
              <p className="text-gray-600 mb-12 text-lg">
                Our work combines renewable energy deployment, hands-on training, and inclusive enterprise development, aligned with Malawi Vision 2063.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {['Renewable Energy', 'Enterprise Dev', 'Technical Training', 'Market Linkages'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <ChevronRight className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <span className="font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn btn-primary group">
                Read Full Story
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">What We Do</span>
            <h2 className="mb-8">Integrated Solutions</h2>
            <p className="text-xl text-gray-600">
              Addressing the interconnected challenges facing rural communities — from water access to skills development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sun, title: "Solar Irrigation", desc: "Harnessing clean energy for year-round production.", color: "bg-solar" },
              { icon: Sprout, title: "Climate-Smart Ag", desc: "Promoting sustainable techniques for soil health.", color: "bg-primary" },
              { icon: Users, title: "Capacity Building", desc: "Practical training for market-oriented producers.", color: "bg-earth" },
              { icon: Zap, title: "Empowerment", desc: "Skills and financing for women and youth.", color: "bg-primary-dark" }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className={`${program.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{program.desc}</p>
                <Link to="/programs" className="text-primary font-bold text-sm flex items-center gap-2 group/link">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Real Impact</span>
              <h2 className="">Featured Projects</h2>
            </div>
            <Link to="/projects" className="btn btn-primary group">
              View All Projects
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Rice Farming Initiative', location: 'Nkhata Bay', image: ProgramSolar, tag: 'Solar' },
              { title: 'Mixed Crop Irrigation', location: 'Nkhata Bay', image: ProgramTraining, tag: 'Training' },
              { title: 'Large-Scale Maize', location: 'Jenda, Mzimba', image: ProgramWomen, tag: 'Empowerment' }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {project.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-2 text-solar font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors text-sm font-bold">
                      View Details <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ProgramWomen} className="w-full h-full object-cover grayscale opacity-10" alt="" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-95"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-white mb-8">Help Expand Our Reach</h2>
              <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
                Partner with us to bring these vital programs to more communities across Malawi. Your support creates measurable change.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/donate" className="btn btn-solar group px-12 py-5 text-lg">
                  <Heart className="mr-3 h-7 w-7 fill-current group-hover:scale-110 transition-transform" />
                  Donate Now
                </Link>
                <Link to="/contact" className="btn btn-glass px-12 py-5 text-lg group">
                  Become a Partner
                  <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
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
