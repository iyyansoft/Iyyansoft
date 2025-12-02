import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../common/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Clients', path: '/clients' },
    { name: 'Careers', path: '/careers' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
  className={`fixed w-full z-50 transition-all duration-300 bg-white ${
    scrolled ? 'shadow-md py-2' : 'py-5'
  }`}
>
  <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">

    {/* Logo Left Side */}
    <Link to="/" className="flex items-center gap-3">
      
  

      <Logo
        className="h-10 md:h-12"
        alt="IyyanSoft Technologies logo"
        variant="colour"
      />
    </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary font-bold' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/30">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-20`}>
        <div className="container mx-auto px-4 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl font-medium border-b border-gray-100 pb-4 ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-primary text-white text-center py-3 rounded-lg font-bold mt-4">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo
              className="h-12 mb-6"
              alt="IyyanSoft Technologies logo"
              variant="colour"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              IyyanSoft Technologies is a leading technology partner for educational institutions, startups, industries, and innovation ecosystems. We specialize in Makers Lab setup, IT services, and digital transformation.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/iyyansoft" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook size={18} />
              </a>
              
              <a href="https://www.linkedin.com/company/iyyansoft-technologies/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-primary pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={16} /> About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={16} /> Our Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={16} /> Projects</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={16} /> Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={16} /> Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-primary pl-3">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={16} /> Makers Lab Setup</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={16} /> Prototype Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={16} /> IT Consulting</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={16} /> Custom Software</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight size={16} /> IoT Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-primary pl-3">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Address: Plot 30/2, 2nd St, Ramapuram, Officers Colony, Adambakkam, Chennai,
                  <br/> Tamil Nadu 600088</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <span>+91-98845 95762</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <span>iyyansoft@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} IyyanSoft Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
