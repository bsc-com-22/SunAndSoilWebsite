import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight, ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

// Import Logo
import Logo from '../../assets/SUN AND SOIL LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled || isOpen
          ? "bg-white/80 backdrop-blur-xl shadow-2xl py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-500"></div>
            <img src={Logo} alt="Sun & Soil" className="h-14 w-auto object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className={clsx(
              "font-heading font-extrabold text-2xl tracking-tighter leading-none transition-colors duration-500",
              scrolled || isOpen ? "text-primary" : "text-white"
            )}>
              Sun & Soil
            </span>
            <span className={clsx(
              "text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-500",
              scrolled || isOpen ? "text-gray-500" : "text-white/70"
            )}>
              Foundation
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                "text-sm font-bold tracking-wide transition-all duration-300 relative py-2 group",
                isActive(link.path)
                  ? "text-primary"
                  : scrolled ? "text-gray-600 hover:text-primary" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
              <span className={clsx(
                "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
          ))}
          <Link to="/donate" className="btn btn-solar px-8 py-3 text-sm group">
            <Heart className="h-4 w-4 mr-2 fill-current group-hover:scale-125 transition-transform" />
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "lg:hidden p-3 rounded-2xl transition-all duration-500",
            scrolled || isOpen ? "text-primary bg-primary/5" : "text-white bg-white/10 backdrop-blur-md"
          )}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 lg:hidden pt-24"
          >
            <div className="container flex flex-col h-full pb-12">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "flex justify-between items-center p-6 rounded-[2rem] text-2xl font-heading font-bold transition-all",
                        isActive(link.path) ? "bg-primary/5 text-primary" : "text-gray-900 hover:bg-gray-50"
                      )}
                    >
                      {link.name}
                      <ChevronRight className={clsx("h-6 w-6 transition-transform", isActive(link.path) ? "text-primary" : "text-gray-300")} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <Link
                  to="/donate"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary w-full py-6 text-xl mb-8"
                >
                  <Heart className="h-6 w-6 mr-3 fill-current" />
                  Donate Now
                </Link>

                <div className="flex justify-center gap-8">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="p-4 bg-gray-50 rounded-2xl text-gray-400 hover:text-primary hover:bg-primary/5 transition-all">
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-solar to-primary"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-solar/10 blur-[120px] rounded-full"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="bg-white p-3 rounded-2xl shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <img src={Logo} alt="Sun & Soil" className="h-12 w-auto" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-tighter leading-none">Sun & Soil</span>
                <span className="text-[10px] text-solar font-bold tracking-[0.3em] uppercase">Foundation</span>
              </div>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed">
              Empowering Malawian communities through solar-powered irrigation and climate-smart agriculture.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl hover:bg-primary hover:text-white transition-all duration-500">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-10 flex items-center gap-3">
              Quick Links
              <span className="w-8 h-px bg-primary"></span>
            </h4>
            <ul className="space-y-5">
              {['About', 'Programs', 'Projects', 'Team', 'Partners'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-all flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-10 flex items-center gap-3">
              Our Focus
              <span className="w-8 h-px bg-solar"></span>
            </h4>
            <ul className="space-y-5 text-gray-400">
              {['Solar Irrigation', 'Climate-Smart Ag', 'Women Empowerment', 'Youth Capacity'].map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-10 flex items-center gap-3">
              Contact Us
              <span className="w-8 h-px bg-primary"></span>
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl group-hover:bg-primary transition-colors shrink-0">
                  <MapPin className="h-5 w-5 text-primary group-hover:text-white" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">Lilongwe, Malawi<br />Kaphiri, Area 36</span>
              </li>
              <li className="flex gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl group-hover:bg-primary transition-colors shrink-0">
                  <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                </div>
                <span className="text-gray-400 text-sm">+265 995 856 237</span>
              </li>
              <li className="flex gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl group-hover:bg-primary transition-colors shrink-0">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                </div>
                <span className="text-gray-400 text-sm break-all">sunandsoilfoundation@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sun & Soil Foundation. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-3 group">
            <span className="text-[10px] uppercase tracking-[0.3em]">Crafted by</span>
            <a href="https://nyasacreatives.netlify.app/" className="font-bold text-white hover:text-primary transition-colors flex items-center gap-1">
              Nyasa Creatives <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
