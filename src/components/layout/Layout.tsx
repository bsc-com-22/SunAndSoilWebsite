import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Heart, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

// Import Logo
import Logo from '../../assets/SUN AND SOIL LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Programs', path: '/programs' },
    { name: 'Projects & Impact', path: '/projects' },
    { name: 'Our Team', path: '/team' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-16 w-16 flex items-center justify-center overflow-hidden">
              <img
                src={Logo}
                alt="Sun & Soil Foundation"
                className="h-full w-full object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-none tracking-tight">Sun & Soil</span>
              <span className="text-[10px] text-earth font-bold tracking-[0.2em] uppercase mt-1">FOUNDATION</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-bold transition-all duration-200 hover:text-primary relative py-2",
                  isActive(link.path)
                    ? "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-gray-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Link
              to="/donate"
              className="bg-solar hover:bg-solar-dark text-primary-dark font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center shadow-lg hover:shadow-solar/20 transform hover:-translate-y-0.5"
            >
              <Heart className="h-4 w-4 mr-2 fill-current" />
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none p-2 rounded-xl bg-neutral-light"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-8 shadow-2xl absolute w-full left-0 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "text-lg font-bold py-4 px-6 rounded-2xl transition-all duration-200",
                  isActive(link.path)
                    ? "text-primary bg-primary/5 border-l-4 border-primary"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="bg-solar text-primary-dark font-bold py-4 px-6 rounded-2xl text-center flex items-center justify-center mt-6 shadow-xl"
            >
              <Heart className="h-5 w-5 mr-2 fill-current" />
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-solar opacity-5 rounded-full -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="h-16 w-16 bg-white p-2 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={Logo}
                  alt="Sun & Soil Foundation"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none tracking-tight">Sun & Soil</span>
                <span className="text-[10px] text-solar font-bold tracking-[0.2em] uppercase mt-1">FOUNDATION</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Empowering Malawian communities through solar-powered irrigation, climate-smart agriculture, and sustainable rural livelihoods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-solar hover:text-primary-dark transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-solar hover:text-primary-dark transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-solar hover:text-primary-dark transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-solar hover:text-primary-dark transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-solar"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-solar transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" /> About Us</Link></li>
              <li><Link to="/programs" className="hover:text-solar transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Our Programs</Link></li>
              <li><Link to="/projects" className="hover:text-solar transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Projects & Impact</Link></li>
              <li><Link to="/team" className="hover:text-solar transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Our Team</Link></li>
              <li><Link to="/partners" className="hover:text-solar transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Partners</Link></li>
              <li><Link to="/donate" className="text-solar font-bold hover:underline flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Donate</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Our Focus
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-solar"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/programs" className="hover:text-solar transition-colors">Solar Irrigation</Link></li>
              <li><Link to="/programs" className="hover:text-solar transition-colors">Climate-Smart Agriculture</Link></li>
              <li><Link to="/programs" className="hover:text-solar transition-colors">Women Empowerment</Link></li>
              <li><Link to="/programs" className="hover:text-solar transition-colors">Youth Capacity Building</Link></li>
              <li><Link to="/programs" className="hover:text-solar transition-colors">Rural Livelihoods</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-solar"></span>
            </h3>
            <ul className="space-y-6 text-sm text-gray-300">
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 mt-0.5">
                  <MapPin className="h-5 w-5 text-solar flex-shrink-0" />
                </div>
                <span>Kaphiri, Area 36<br />Lilongwe, Malawi</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-solar flex-shrink-0" />
                </div>
                <span>+265 995 856 237</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-solar flex-shrink-0" />
                </div>
                <span>sunandsoilfoundation@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sun & Soil Foundation. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-white/5 pt-8">
          <p className="text-[10px] text-gray-500 tracking-widest uppercase">
            Developed by{' '}
            <a
              href="https://nyasacreatives.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-solar hover:text-white transition-colors font-bold"
            >
              Nyasa Creatives
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-neutral-light">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
