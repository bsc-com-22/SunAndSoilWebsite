import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

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
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroTeamBg}
            alt="Sun & Soil Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Meet Our <span className="text-solar">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            A dedicated group of professionals passionate about sustainable development and community empowerment in Malawi.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-4">
                      <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-solar hover:text-primary-dark transition-colors text-white">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-solar hover:text-primary-dark transition-colors text-white">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-primary font-bold text-xs mb-4 uppercase tracking-widest">{member.role}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="bg-primary-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-20 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-solar opacity-10 rounded-full -ml-32 -mb-32"></div>

            <h2 className="text-4xl font-heading font-bold mb-6 relative z-10">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
              We are always looking for passionate individuals to join our team. Whether as a volunteer, intern, or professional, your skills can help power Malawi's food future.
            </p>
            <button className="bg-solar hover:bg-solar-dark text-primary-dark font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-1 relative z-10">
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
