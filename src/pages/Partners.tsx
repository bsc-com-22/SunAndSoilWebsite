import React from 'react';
import { Globe, Award, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

// Import Assets
import HeroPartnersBg from '../assets/hero-partners.png';
import Logo from '../assets/SUN AND SOIL LOGO.png';

const Partners = () => {
  const sdgs = [
    { number: '1', title: 'No Poverty' },
    { number: '2', title: 'Zero Hunger' },
    { number: '7', title: 'Clean Energy' },
    { number: '13', title: 'Climate Action' }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-primary-dark">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroPartnersBg}
            alt="Sun & Soil Partners"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-white mb-6">Partners & <span className="text-solar">Alignment</span></h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Working together with development partners, government agencies, and private sector organizations for greater impact.
          </p>
        </div>
      </section>

      {/* Alignment Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Alignment</span>
            <h2 className="mb-6">Global & National Goals</h2>
            <p className="text-gray-600">
              Our programs are designed to contribute to global, national, and ESG frameworks for sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* UN SDGs */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/3">
                  <div className="bg-white p-4 rounded-xl shadow-sm inline-block mb-6">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">UN Sustainable Development Goals</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Contributing to multiple SDGs, with primary alignment to Goals 2, 7, and 13.</p>
                </div>
                <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {sdgs.map((sdg, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl text-center border border-gray-100">
                      <div className="text-2xl font-bold text-primary mb-2">{sdg.number}</div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{sdg.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision 2063 & ESG */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="bg-white p-4 rounded-xl shadow-sm inline-block mb-6">
                  <Award className="h-8 w-8 text-solar-dark" />
                </div>
                <h3 className="text-xl font-bold mb-4">Malawi Vision 2063</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Supporting long-term development through agricultural transformation and sustainability.</p>
                <ul className="space-y-2">
                  {['Agricultural Productivity', 'Environmental Sustainability', 'Human Capital'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="bg-white p-4 rounded-xl shadow-sm inline-block mb-6">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">ESG Alignment</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Delivering measurable Environmental, Social, and Governance outcomes for our partners.</p>
                <ul className="space-y-2">
                  {['Climate Adaptation', 'Community Empowerment', 'Transparent Reporting'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Network</span>
            <h2 className="mb-6">Valued Partners</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-50 h-32 rounded-xl flex items-center justify-center p-8 border border-transparent hover:border-primary/10 transition-colors grayscale opacity-60 hover:grayscale-0 hover:opacity-100">
                <img src={Logo} alt="Partner Logo" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6">Join Our Network</h2>
            <p className="text-gray-600 mb-10">
              Partner with us to drive sustainable agricultural transformation in Malawi. Together, we can create lasting impact.
            </p>
            <button className="btn btn-primary">
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
