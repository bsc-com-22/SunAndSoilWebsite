import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Sprout, Users, Heart, MapPin, Award, Zap, Target } from 'lucide-react';

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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroBg}
            alt="Solar powered irrigation in Malawi"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container relative z-10 py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6">
              <Sun className="h-4 w-4 text-solar" />
              <span className="text-white text-[10px] font-bold tracking-widest uppercase">Powering Malawi's Future</span>
            </div>

            <h1 className="text-white mb-6 leading-tight">
              Sustainable Energy for <span className="text-solar">Self-Sufficient</span> Communities
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Empowering smallholder farmers to transition from climate-vulnerable subsistence to productive, market-oriented agriculture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate" className="btn btn-solar px-8">
                Donate Now
              </Link>
              <Link to="/programs" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-dark px-8">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={AboutFarmer}
                alt="Malawian woman farmer"
                className="rounded-2xl shadow-sm w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="mb-8 leading-tight">
                Born From a Vision of <span className="text-primary">Self-Sufficiency</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Sun & Soil Foundation supports smallholder farmers in moving from climate-vulnerable subsistence farming toward productive, market-oriented systems.
              </p>
              <p className="text-gray-600 mb-10">
                Our work combines renewable energy deployment, hands-on training, and inclusive enterprise development, aligned with Malawi Vision 2063.
              </p>

              <Link to="/about" className="btn btn-primary px-8">
                Read Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What We Do</span>
            <h2 className="mb-6">Integrated Solutions</h2>
            <p className="text-gray-600">
              Addressing the interconnected challenges facing rural communities — from water access to skills development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sun, title: "Solar Irrigation", desc: "Harnessing clean energy for year-round production." },
              { icon: Sprout, title: "Climate-Smart Ag", desc: "Promoting sustainable techniques for soil health." },
              { icon: Users, title: "Capacity Building", desc: "Practical training for market-oriented producers." },
              { icon: Zap, title: "Empowerment", desc: "Skills and financing for women and youth." }
            ].map((program, index) => (
              <div key={index} className="card group">
                <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <program.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{program.desc}</p>
                <Link to="/programs" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Real Impact</span>
              <h2 className="">Featured Projects</h2>
            </div>
            <Link to="/projects" className="text-primary font-bold flex items-center gap-2 hover:underline">
              View All Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Rice Farming Initiative', location: 'Nkhata Bay', image: ProgramSolar },
              { title: 'Mixed Crop Irrigation', location: 'Nkhata Bay', image: ProgramTraining },
              { title: 'Large-Scale Maize', location: 'Jenda, Mzimba', image: ProgramWomen }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <Link to="/projects" className="text-gray-500 text-sm hover:text-primary transition-colors">View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-dark text-white text-center">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white mb-8">Help Expand Our Reach</h2>
            <p className="text-lg text-gray-300 mb-12">
              Partner with us to bring these vital programs to more communities across Malawi. Your support creates measurable change.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/donate" className="btn btn-solar px-10">
                Donate Now
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-dark px-10">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
