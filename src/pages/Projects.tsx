import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Zap, Target, CheckCircle, Award } from 'lucide-react';

// Import Assets
import HeroProjectsBg from '../assets/hero-projects.png';
import ProgramSolar from '../assets/program-solar.jpg';
import ProgramTraining from '../assets/program-training.jpg';
import HeroFarming from '../assets/hero-farming.jpg';
import ProgramWomen from '../assets/program-women.jpg';
import AboutFarmer from '../assets/about-farmer.jpg';
import RuthImg from '../assets/Ruth.jpeg';

const Projects = () => {
  const stats = [
    { label: 'Farmers Supported', value: '10', icon: Users },
    { label: 'People Trained', value: '85', icon: Award },
    { label: 'Solar Powered', value: '100%', icon: Zap },
    { label: 'Target by 2030', value: '50K', icon: Target }
  ];

  const solarProjects = [
    {
      title: 'Rice Farming Initiative',
      location: 'Nkhata Bay',
      category: 'Rice Farming',
      description: 'Supporting local farmers with reliable water access for consistent rice production.',
      farmers: '2 Farmers',
      system: '180W Solar Pumps',
      crops: 'Rice',
      outcome: 'Improved flooding consistency & increased yields',
      image: ProgramSolar
    },
    {
      title: 'Mixed Crop Irrigation',
      location: 'Nkhata Bay',
      category: 'Mixed Crop Irrigation',
      description: 'Enabling diverse crop production throughout the dry season.',
      farmers: '3 Farmers',
      system: '180W Solar Pumps',
      crops: 'Maize, Veg, Cassava',
      outcome: 'Year-round production & reduced labour',
      image: ProgramTraining
    },
    {
      title: 'Large-Scale Maize',
      location: 'Jenda, Mzimba',
      category: 'Large-Scale Maize',
      description: 'High-capacity solar irrigation for commercial maize farming.',
      farmers: '1 Farmer',
      system: '1000W Pump',
      crops: 'Maize',
      outcome: 'Year-round production & reduced labour',
      image: HeroFarming
    },
    {
      title: 'Horticulture Project',
      location: 'Mzuzu',
      category: 'Horticulture Project',
      description: 'Intensive vegetable farming for local markets.',
      farmers: '1 Farmer',
      system: '180W Solar Pump',
      crops: 'Vegetables, Potatoes',
      outcome: 'Stable income & improved nutrition',
      image: ProgramWomen
    },
    {
      title: 'Mixed Systems',
      location: 'Lilongwe',
      category: 'Mixed Systems',
      description: 'Integrated farming systems for maximum land efficiency.',
      farmers: '3 Farmers',
      system: '250W Pumps',
      crops: 'Maize, Rice',
      outcome: 'Reliable irrigation & higher yields',
      image: AboutFarmer
    }
  ];

  const trainingPrograms = [
    {
      title: "Women's Livelihood Program",
      location: 'Nkhotakota',
      category: "Women's Livelihood",
      description: 'Commercial mindset and financial confidence building for women.',
      participants: '40 Women',
      status: 'Completed',
      image: ProgramWomen
    },
    {
      title: 'Youth Agribusiness Program',
      location: 'Nkhotakota',
      category: 'Youth Agribusiness',
      description: 'Skills development and income generation for education.',
      participants: '15 Youth',
      status: 'Completed',
      image: AboutFarmer
    },
    {
      title: 'Technical Training Program',
      location: 'Mzuzu & Nkhata Bay',
      category: 'Technical Training',
      description: 'Sustainable system use and yield improvement techniques.',
      participants: '30 Farmers',
      status: 'Completed',
      image: ProgramTraining
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroProjectsBg}
            alt="Sun & Soil Projects"
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
            Projects & <span className="text-solar">Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-200 mb-4"
          >
            Real Impact, Measurable Change
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg max-w-3xl mx-auto text-gray-300"
          >
            Across Malawi, we are working with communities to implement sustainable solutions that improve food security and build climate resilience.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-light relative z-20 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-50"
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solar Irrigation Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-4 flex items-center justify-center">
              <span className="w-8 h-1 bg-primary mr-3"></span>
              Solar Irrigation
              <span className="w-8 h-1 bg-primary ml-3"></span>
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Solar irrigation installations transforming subsistence farming into commercial enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {solarProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-50 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 bg-primary text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Solar
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {project.location}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-sm text-primary font-bold mb-4 uppercase tracking-wider">{project.category}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-8 bg-neutral-light p-5 rounded-2xl">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Farmers:</span>
                      <span className="font-bold text-gray-800">{project.farmers}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">System:</span>
                      <span className="font-bold text-gray-800">{project.system}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Crops:</span>
                      <span className="font-bold text-gray-800">{project.crops}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-bold text-gray-800">Key Outcome:</span> {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Empowerment */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-4 flex items-center justify-center">
              <span className="w-8 h-1 bg-primary mr-3"></span>
              Training & Empowerment
              <span className="w-8 h-1 bg-primary ml-3"></span>
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">Capacity Building</h2>
            <p className="text-xl text-gray-600">
              Equipping communities with the skills and knowledge to sustain development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-50 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 bg-solar text-primary-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {program.status}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {program.location}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-sm text-primary font-bold mb-4 uppercase tracking-wider">{program.category}</p>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-bold text-gray-800">{program.participants}</span>
                    </div>
                    <CheckCircle className="h-7 w-7 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-4 flex items-center justify-center">
              <span className="w-8 h-1 bg-primary mr-3"></span>
              Success Stories
              <span className="w-8 h-1 bg-primary ml-3"></span>
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800">Voices of Change</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-neutral-light p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full"></div>
              <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full transform rotate-6 scale-105 opacity-20"></div>
                    <img
                      src={RuthImg}
                      alt="Mary Phiri"
                      className="w-64 h-64 rounded-full object-cover mx-auto shadow-2xl border-8 border-white relative z-10"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-7xl text-primary/20 font-serif mb-4 leading-none">"</div>
                  <p className="text-2xl text-gray-700 leading-relaxed mb-8 italic font-medium -mt-8">
                    Before the solar pump, I relied entirely on the rains. If they failed, my family went hungry. Now, I harvest three times a year. I can pay for my children's school fees and even save money.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-1 bg-primary"></div>
                    <div>
                      <p className="font-bold text-gray-800 text-xl">Mary Phiri</p>
                      <p className="text-primary font-medium">Nkhata Bay Farmer</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
