import React from 'react';
import { Link } from 'react-router-dom';
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
      icon: Sun,
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
      icon: Sprout,
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
      icon: Users,
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
      icon: TrendingUp,
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
      <section className="relative pt-40 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroProgramsBg}
            alt="Sun & Soil Programs"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-white mb-6">Our <span className="text-solar">Programs</span></h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Integrated solutions for sustainable change, addressing the interconnected challenges facing rural communities.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-24">
            {programs.map((program, index) => (
              <div key={program.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="rounded-2xl shadow-sm w-full h-[350px] md:h-[450px] object-cover"
                  />
                </div>
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">{program.title}</h2>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/donate" className="btn btn-primary px-8">
                    Support This Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Help Expand Our Reach</h2>
            <p className="text-lg text-gray-600 mb-12">
              Partner with us to bring these vital programs to more communities across Malawi. Your support creates measurable change.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn btn-primary px-10">Become a Partner</Link>
              <Link to="/donate" className="btn btn-solar px-10">Donate Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
