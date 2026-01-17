import React from 'react';
import { Target, Eye, CheckCircle } from 'lucide-react';

// Import Assets
import HeroAboutBg from '../assets/hero-about.png';
import AboutFarmer from '../assets/about-farmer.jpg';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative pt-40 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroAboutBg}
            alt="Agriculture field"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-white mb-6">About <span className="text-solar">Us</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Dedicated to building a sustainable, food-secure future for Malawi through innovation and community partnership.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="mb-8">Born From a Vision of <span className="text-primary">Self-Sufficiency</span></h2>
              <p className="text-gray-600 mb-6 text-lg">
                Sun & Soil Foundation was founded with a clear purpose: to support smallholder farmers, women, youths, and vulnerable groups in moving from climate-vulnerable subsistence farming toward productive, market-oriented, and resilient agricultural systems.
              </p>
              <p className="text-gray-600 text-lg">
                Our work combines renewable energy deployment, hands-on training, and inclusive enterprise development, aligned with Malawi Vision 2063.
              </p>
            </div>
            <div>
              <img
                src={AboutFarmer}
                alt="Malawian farmer"
                className="rounded-2xl shadow-sm w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-10">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-8">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A Malawi where every rural community is resilient, food secure, and economically thriving through sustainable agriculture and clean energy.
              </p>
            </div>
            <div className="card p-10">
              <div className="bg-solar/10 w-14 h-14 rounded-xl flex items-center justify-center mb-8">
                <Target className="h-8 w-8 text-solar-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower smallholder farmers, especially women and youth, with solar irrigation technologies, climate-smart agricultural skills, and market linkages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What Guides Us</span>
            <h2 className="mb-6">Our Core Values</h2>
            <p className="text-gray-600">
              These principles shape every program we design and every partnership we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sustainability", desc: "Prioritizing long-term environmental health and economic viability." },
              { title: "Inclusion", desc: "Ensuring women and youth are at the center of transformation." },
              { title: "Innovation", desc: "Embracing new technologies to solve agricultural challenges." },
              { title: "Accountability", desc: "Transparent and responsible stewards of resources." },
              { title: "Empowerment", desc: "Equipping communities with tools and knowledge." },
              { title: "Stewardship", desc: "Committed to protecting and restoring the environment." }
            ].map((value, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-primary/10 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
