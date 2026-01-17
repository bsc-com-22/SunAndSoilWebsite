import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

// Import Logo
import Logo from '../../assets/SUN AND SOIL LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Sun & Soil" className="h-10 w-auto object-contain" />
          <div className="flex flex-col">
            <span className={clsx("font-bold text-lg leading-none", scrolled || isOpen ? "text-primary" : "text-white md:text-primary")}>Sun & Soil</span>
            <span className={clsx("text-[8px] font-bold tracking-widest uppercase", scrolled || isOpen ? "text-gray-500" : "text-white/80 md:text-gray-500")}>Foundation</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.path)
                  ? "text-primary"
                  : scrolled ? "text-gray-600" : "text-white md:text-gray-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/donate" className="btn btn-solar px-6 py-2 text-sm">
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "lg:hidden p-2 rounded-lg transition-colors",
            scrolled || isOpen ? "text-gray-900" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-between items-center mb-12">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <img src={Logo} alt="Sun & Soil" className="h-10 w-auto" />
              <span className="font-bold text-lg text-primary">Sun & Soil</span>
            </Link>
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-900">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "flex justify-between items-center py-2 text-2xl font-bold",
                  isActive(link.path) ? "text-primary" : "text-gray-900"
                )}
              >
                {link.name}
                <ChevronRight className="h-6 w-6 text-gray-300" />
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary mt-8 w-full py-4 text-lg"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} alt="Sun & Soil" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-bold text-primary leading-none">Sun & Soil</span>
                <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Foundation</span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering Malawian communities through solar-powered irrigation and sustainable agriculture.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['About', 'Programs', 'Projects', 'Team', 'Partners'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Our Focus</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Solar Irrigation</li>
              <li>Climate-Smart Ag</li>
              <li>Women Empowerment</li>
              <li>Youth Capacity</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Lilongwe, Malawi</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+265 995 856 237</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>sunandsoilfoundation@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sun & Soil Foundation.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
          <p className="uppercase tracking-widest text-[10px]">
            By <a href="https://nyasacreatives.netlify.app/" className="font-bold text-primary">Nyasa Creatives</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
