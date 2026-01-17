import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Zap, CheckCircle, ArrowRight, Play, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Assets
import HeroProjectsBg from '../assets/hero-projects.png';
import ProgramSolar from '../assets/program-solar.jpg';
import ProgramTraining from '../assets/program-training.jpg';
import ProgramWomen from '../assets/program-women.jpg';
import AboutFarmer from '../assets/about-farmer.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Solar Rice Farming Initiative',
      location: 'Nkhata Bay',
      beneficiaries: '10 Farmers',
      status: 'Active',
      impact: 'Year-round production enabled',
      image: ProgramSolar,
      tag: 'Solar'
    },
    {
      title: 'Mixed Crop Irrigation Project',
      location: 'Nkhata Bay',
      beneficiaries: '15 Farmers',
      status: 'Active',
      impact: 'Diversified income streams',
      image: ProgramTraining,
      tag: 'Irrigation'
    },
    {
      title: 'Large-Scale Maize Production',
      location: 'Jenda, Mzimba',
      beneficiaries: '25 Farmers',
      status: 'In Progress',
      impact: 'Food security for 100+ households',
      image: ProgramWomen,
      tag: 'Empowerment'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroProjectsBg}
            alt="Sun & Soil Projects"
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
            <span className="text-solar text-xs font-bold tracking-[0.3em] uppercase">Real Impact on the Ground</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-8"
          >
            Our <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming agricultural landscapes and lives through sustainable, community-led initiatives across Malawi.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Active Projects', value: '12', icon: Zap, color: 'text-solar-dark' },
              { label: 'Beneficiaries', value: '500+', icon: Users, color: 'text-primary' },
              { label: 'Hectares Irrigated', value: '45', icon: MapPin, color: 'text-blue-500' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-50 text-center group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-heading font-extrabold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
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
                    <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{project.title}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6 border-t border-white/10 pt-6">
                      <div>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Beneficiaries</p>
                        <p className="text-sm font-bold text-white">{project.beneficiaries}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Status</p>
                        <p className="text-sm font-bold text-solar">{project.status}</p>
                      </div>
                    </div>
                    <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-bold text-sm hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2">
                      View Details <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="img-overlay">
                <img
                  src={AboutFarmer}
                  alt="Success Story"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="w-24 h-24 bg-solar rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
                  <Play className="h-10 w-10 text-primary-dark fill-current ml-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Success Story</span>
              <h2 className="mb-10 leading-tight">Empowering <span className="gradient-text">Smallholder Farmers</span></h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed italic">
                "Before Sun & Soil, we could only farm during the rainy season. Now, with solar irrigation, we harvest three times a year. Our children are in school, and we have built a new home."
              </p>
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-xl">
                  <img src={AboutFarmer} className="w-full h-full object-cover" alt="" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Agness Phiri</h4>
                  <p className="text-sm text-gray-500">Beneficiary, Nkhata Bay</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl font-heading font-extrabold text-primary mb-1">300%</div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Yield Increase</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl font-heading font-extrabold text-solar-dark mb-1">2x</div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Household Income</p>
                </div>
              </div>
              <Link to="/donate" className="btn btn-primary group">
                Support More Farmers
                <Heart className="ml-3 h-5 w-5 fill-current group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
