import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, GraduationCap, Factory, ShoppingCart, Radio, Droplets, Rocket, ArrowRight } from 'lucide-react';

// Importing image from assets
import AnnaUniversity from '../assets/annauniversity.png';
import Max from '../assets/Max-Aquaa.jpg';
import Mukil from '../assets/Mukil.png';

const Clients = () => {

  const clients = [
    {
      name: "Anna University",
      description: "Makers Lab consulting & prototype development support. We partnered with this prestigious institution to enhance their innovation infrastructure and mentor student projects.",
      icon: AnnaUniversity,
      color: "bg-blue-50 text-blue-600"
    },
    {
      name: "Max Aquaa Tech Solution",
      description: "Automation consulting & prototype development. We delivered strategic automation solutions that streamlined their manufacturing processes and improved efficiency.",
      icon: Max,
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      name: "Mukil Water",
      description: "IoT product development. We engineered a smart water quality monitoring system that allows for real-time tracking and data analysis.",
      icon: Mukil,
      color: "bg-sky-50 text-sky-600"
    },
    {
      name: "Muthamil Super Market",
      description: "Billing & inventory automation. We implemented a custom POS system that revolutionized their retail operations and inventory management.",
      icon: <ShoppingCart size={40} />,
      color: "bg-green-50 text-green-600"
    },
    {
      name: "EventzGo",
      description: "Ticketing platform development. We built a comprehensive web application for event management, ticketing, and analytics.",
      icon: <Rocket size={40} />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      name: "SPM Gospel FM",
      description: "Digital operations enhancement. We provided end-to-end digital infrastructure support, including website maintenance and live streaming integration.",
      icon: <Radio size={40} />,
      color: "bg-red-50 text-red-600"
    }
  ];

  const sectors = [
    { name: "Education", icon: <GraduationCap size={32} />, desc: "Empowering institutions with Makers Labs and innovation curriculums." },
    { name: "Manufacturing", icon: <Factory size={32} />, desc: "Driving Industry 4.0 adoption through automation and IoT." },
    { name: "FMCG", icon: <ShoppingCart size={32} />, desc: "Streamlining retail and supply chain operations with custom software." },
    { name: "Media & Entertainment", icon: <Radio size={32} />, desc: "Enabling digital transformation for content creators and broadcasters." },
    { name: "Water Technology", icon: <Droplets size={32} />, desc: "Innovating for sustainability with smart water management solutions." },
    { name: "Startups & Innovation Labs", icon: <Rocket size={32} />, desc: "Accelerating product development from concept to MVP." }
  ];

  return (
    <div className="flex flex-col w-full">

      {/* Header */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">Our Proud Clients</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are honored to work with visionary organizations across various industries.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 border border-gray-100">
                
                {/* Icon Box */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${client.color}`}>
                  {typeof client.icon === "string" ? (
                    <img 
                      src={client.icon} 
                      alt={client.name} 
                      className="w-22 h-22 object-contain"
                    />
                  ) : (
                    client.icon
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900">{client.name}</h3>
                <p className="text-gray-600 leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Industries</h2>
            <h3 className="text-4xl font-bold">Sectors We Serve</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-primary transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary group-hover:text-white transition-colors">
                    {sector.icon}
                  </div>
                  <h4 className="text-xl font-bold">{sector.name}</h4>
                </div>
                <p className="text-gray-400 text-sm">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Join Our Growing List of Happy Clients</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Experience the IyyanSoft difference. Let's build something extraordinary together.
          </p>
          <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors shadow-lg hover:shadow-primary/30 inline-flex items-center gap-2">
            Partner With Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Clients;
