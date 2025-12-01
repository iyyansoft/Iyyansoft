import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Lightbulb, Cpu, Code, Settings, Users, Award, Zap } from 'lucide-react';
import TeamCollab from "../assets/team-collaboration1.jpeg";



const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 ">
          <img
            src="/assets/hero-bg.jpeg"
            alt="Abstract technology background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            {/* <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-bold mb-6 border border-primary/30">
              INNOVATION PARTNER FOR THE FUTURE
            </div> */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Transforming Ideas <br />
              <span className="text-primary">Into Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              IyyanSoft Technologies is a leading technology partner for educational institutions, startups, industries, and innovation ecosystems. We specialize in Makers Lab & Idea Lab setup, IT services, prototype development, and digital transformation solutions. We bridge the gap between conceptualization and execution, empowering you to build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2 group">
                Get a Free Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all flex items-center justify-center">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-black mb-6">Comprehensive Technology Solutions</h3>
            <p className="text-gray-600 text-lg">
              We deliver end-to-end solutions that empower organizations to innovate, scale, and succeed in a rapidly evolving digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb size={40} />,
                title: "Makers Lab / Idea Lab Setup",
                desc: "We provide turnkey solutions for establishing state-of-the-art Makers Labs and Idea Labs in educational institutions and innovation hubs. From spatial design to equipment procurement, we handle it all."
              },
              {
                icon: <Cpu size={40} />,
                title: "Prototype Development",
                desc: "Transforming concepts into tangible reality. We specialize in IoT, Hardware, Software, Web, and Mobile prototyping, helping startups and researchers validate their ideas efficiently."
              },
              {
                icon: <Code size={40} />,
                title: "IT Consulting & Software",
                desc: "Custom software development tailored to your business needs. We offer strategic IT consulting to optimize your digital infrastructure and drive operational efficiency."
              },
              {
                icon: <Settings size={40} />,
                title: "Lab Operations Support",
                desc: "Beyond setup, we ensure sustainability. Our team provides ongoing operational support, maintenance, and training to ensure your innovation labs run smoothly and effectively."
              },
              {
                icon: <Zap size={40} />,
                title: "Equipment Procurement",
                desc: "Expert guidance on Bill of Materials (BOM) preparation and equipment sourcing. We ensure you get the best tools and technologies at the most competitive prices."
              },
              {
                icon: <Award size={40} />,
                title: "Startup Idea Validation",
                desc: "We don't just build; we validate. Our technical support helps startups assess feasibility, refine their value proposition, and prepare for market entry with confidence."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-primary group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-black">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose IyyanSoft */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Why Choose Us</h2>
              <h3 className="text-4xl font-bold mb-8">Your Trusted Partner in Innovation</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                At IyyanSoft Technologies, we believe in building long-term partnerships based on trust, quality, and results. Our commitment to excellence sets us apart in the industry.
              </p>
              
              <div className="space-y-6">
                {[
                  "8+ Years of Industry Expertise",
                  "Trusted by Universities & Corporates",
                  "End-to-End Prototype Development",
                  "Affordable Lab Setup Solutions",
                  "On-ground Support Across Tamil Nadu",
                  "Rapid Delivery & Quality Assurance"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/about" className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2">
                  Learn more about our journey <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl "></div>
              <img 
  src={TeamCollab}
  alt="Team collaboration"
  className="relative rounded-2xl shadow-2xl border border-gray-800 w-full h-auto max-w-xl mt-4"
/>

            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Trusted By Industry Leaders</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for Logos - using text for now as per instructions to keep content exact but styled */}
            <div className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">Anna University</div>
            <div className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">Max Aquaa Tech Solution</div>
            <div className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">Mukil Water</div>
            <div className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">Muthamil Super Market</div>
            <div className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">EventzGo</div>
            <div className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">SPM Gospel FM</div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Success Stories</h2>
            <h3 className="text-4xl font-bold text-black mb-6">Delivering Real Impact</h3>
            <p className="text-gray-600 text-lg">
              We take pride in the success of our clients. Here are a few examples of how we've helped organizations achieve their goals through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="/assets/monitoring-prototype.jpeg" 
                  alt="Smart Water Quality Monitor prototype" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-primary font-bold mb-2">IOT & HARDWARE</div>
                <h4 className="text-xl font-bold mb-3">Smart Water Quality Monitor</h4>
                <p className="text-gray-500 text-sm mb-4">Client: Mukil Water</p>
                <p className="text-gray-600 mb-6">
                  Developed an IoT-based water quality monitoring prototype with cloud dashboard and field-ready units. This solution enables real-time tracking of water parameters, ensuring safety and compliance standards are met efficiently.
                </p>
                <Link to="/projects" className="text-black font-bold hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  Read Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="/assets/eventzgo-platform.jpeg" 
                  alt="EventzGo ticketing platform dashboard" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-primary font-bold mb-2">WEB DEVELOPMENT</div>
                <h4 className="text-xl font-bold mb-3">EventzGo Ticketing Platform</h4>
                <p className="text-gray-500 text-sm mb-4">Client: EventzGo</p>
                <p className="text-gray-600 mb-6">
                  Built the complete MVP for an event-ticketing web app with intuitive UI and admin dashboard. The platform streamlines ticket sales, attendee management, and event analytics, providing a seamless experience for organizers and users.
                </p>
                <Link to="/projects" className="text-black font-bold hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  Read Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="/assets/idea-lab.jpeg" 
                  alt="Innovation lab support" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-primary font-bold mb-2">CONSULTING & TRAINING</div>
                <h4 className="text-xl font-bold mb-3">Idea Lab Support</h4>
                <p className="text-gray-500 text-sm mb-4">Client: Anna University</p>
                <p className="text-gray-600 mb-6">
                  Provided consulting, BOM preparation, procurement support, training & prototype mentoring. We helped establish a vibrant innovation ecosystem where students can explore, experiment, and bring their ideas to life.
                </p>
                <Link to="/projects" className="text-black font-bold hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  Read Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Ideas?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether you need a Makers Lab setup, a prototype for your startup, or custom software, we are here to help you succeed.
          </p>
          <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all shadow-lg inline-flex items-center gap-2">
            Start Your Project Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
