import React from 'react';
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
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative pt-40 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroProjectsBg}
            alt="Sun & Soil Projects"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-white mb-6">Projects & <span className="text-solar">Impact</span></h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Real impact, measurable change across Malawi through sustainable community-led solutions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Real Impact</span>
            <h2 className="mb-6">Featured Projects</h2>
            <p className="text-gray-600">
              Solar irrigation installations transforming subsistence farming into commercial enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solarProjects.map((project, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden -m-6 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-3">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{project.description}</p>

                <div className="space-y-2 pt-6 border-t border-gray-50">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">System:</span>
                    <span className="font-bold">{project.system}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Crops:</span>
                    <span className="font-bold">{project.crops}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="shrink-0">
                <img
                  src={RuthImg}
                  alt="Mary Phiri"
                  className="w-48 h-48 rounded-full object-cover border-4 border-gray-50"
                />
              </div>
              <div>
                <div className="text-4xl text-primary/20 font-serif mb-4">"</div>
                <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                  Before the solar pump, I relied entirely on the rains. Now, I harvest three times a year. I can pay for my children's school fees and even save money.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-primary"></div>
                  <div>
                    <p className="font-bold text-gray-900">Mary Phiri</p>
                    <p className="text-sm text-primary">Nkhata Bay Farmer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
