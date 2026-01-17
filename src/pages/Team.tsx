import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowRight, ChevronRight } from 'lucide-react';

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
      bio: "Michael provides overall strategic direction and leadership for the foundation, ensuring alignment with our mission and vision."
    },
    {
      name: "Patson Mnthali",
      role: "Technical Lead Solar Systems",
      image: PatsonImg,
      bio: "Patson oversees the technical planning, installation, and maintenance of all solar-powered irrigation systems."
    },
    {
      name: "Collings Birton",
      role: "Finance & Procurement Manager",
      image: CollingsImg,
      bio: "Collings manages the foundation's financial resources, procurement processes, and administrative functions."
    },
    {
      name: "Ruth Phiri",
      role: "HR & Administration Manager",
      image: RuthImg,
      bio: "Ruth ensures effective human resource management and smooth administrative operations across the organization."
    },
    {
      name: "Jonathan Banda",
      role: "Women & Youth Coordinator",
      image: JonathanImg,
      bio: "Jonathan works directly with vulnerable groups to ensure inclusive participation and empowerment in all our programs."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroTeamBg}
            alt="Sun & Soil Team"
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
            <span className="text-solar text-xs font-bold tracking-[0.3em] uppercase">The People Behind the Mission</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-8"
          >
            Meet Our <span className="gradient-text">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A dedicated group of professionals passionate about sustainable development and community empowerment in Malawi.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamData.map((member, index) => (
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
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-4">{member.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="container relative z-10">
          <div className="card max-w-5xl mx-auto p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-solar/10 rounded-full blur-3xl"></div>

            <div className="max-w-2xl mx-auto space-y-10">
              <h2 className="mb-8">Join Our Mission</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We are always looking for passionate individuals to join our team. Whether as a volunteer, intern, or professional, your skills can help power Malawi's food future.
              </p>
              <Link to="/contact" className="btn btn-primary px-12 py-5 text-lg group">
                Get Involved
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
