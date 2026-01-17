import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

// Import Team Images
import MichealImg from '../assets/Micheal.jpg';
import PatsonImg from '../assets/Patson.jpg';
import CollingsImg from '../assets/Collings.jpg';
import RuthImg from '../assets/Ruth.jpeg';
import JonathanImg from '../assets/Jonathan.jpg';
import HeroTeamBg from '../assets/hero-team.png';

const Team = () => {
  const teamData = [
    {
      name: "Michael Maseko Banda",
      role: "Executive Director",
      image: MichealImg,
      bio: "Michael provides overall strategic direction and leadership for the foundation."
    },
    {
      name: "Patson Mnthali",
      role: "Technical Lead Solar Systems",
      image: PatsonImg,
      bio: "Patson oversees the technical planning and installation of all solar systems."
    },
    {
      name: "Collings Birton",
      role: "Finance & Procurement Manager",
      image: CollingsImg,
      bio: "Collings manages the foundation's financial resources and procurement."
    },
    {
      name: "Ruth Phiri",
      role: "HR & Administration Manager",
      image: RuthImg,
      bio: "Ruth ensures effective human resource management and smooth operations."
    },
    {
      name: "Jonathan Banda",
      role: "Women & Youth Coordinator",
      image: JonathanImg,
      bio: "Jonathan works directly with vulnerable groups to ensure inclusive participation."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative pt-40 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroTeamBg}
            alt="Sun & Soil Team"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-white mb-6">Meet Our <span className="text-solar">Team</span></h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            A dedicated group of professionals passionate about sustainable development and community empowerment in Malawi.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="bg-white p-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6">Join Our Mission</h2>
            <p className="text-gray-600 mb-10">
              We are always looking for passionate individuals to join our team. Whether as a volunteer, intern, or professional, your skills can help power Malawi's food future.
            </p>
            <Link to="/contact" className="btn btn-primary px-10">Get Involved</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
