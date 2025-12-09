import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Layers } from 'lucide-react';
import Muthamil from "../assets/muthamil.png";

const Projects = () => {
  const projects = [
    {
      title: "Smart Water Quality Monitoring System",
      client: "Mukil Water",
      category: "IoT & Cloud",
      image: "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?auto=format&fit=crop&w=1470&q=80",
      description: "A comprehensive IoT solution designed to monitor water quality parameters in real-time.",
      features: [
        "IoT-based water sensor module",
        "Real-time data transmission",
        "Interactive cloud dashboard",
        "Automated alert system",
        "Pilot-ready prototype"
      ],
      tech: ["ESP32", "IoT Sensors", "AWS IoT", "React", "Node.js"]
    },

    {
      title: "EventzGo – Event Ticketing Platform",
      client: "EventzGo",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1470&q=80",
      description: "A robust event ticketing and management platform.",
      features: [
        "Frontend + Backend development",
        "Payment Gateway",
        "Admin Panel",
        "QR Code Ticketing",
        "Responsive UI"
      ],
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      link: "https://www.eventzgo.com/"
    },

    {
      title: "Makers Lab Setup",
      client: "Educational Institutions",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1470&q=80",
      description: "State-of-the-art Makers Labs fostering innovation and hands-on learning.",
      features: [
        "Custom Lab design",
        "Equipment support",
        "Training modules",
        "Prototype development support",
        "Campus innovation ecosystem"
      ],
      tech: ["3D Printing", "Laser Cutting", "Electronics", "Robotics", "PCB Design"],
      link: "https://www.auced.com/"
    },

    {
      title: "Retail Billing Automation",
      client: "Muthamil Super Market",
      category: "Enterprise Software",
      image: {Muthamil},
      description: "A custom POS and inventory management system.",
      features: [
        "Fast POS automation",
        "Stock alerts",
        "Dashboard reporting",
        "Barcode scanning",
        "Multi-user roles"
      ],
      tech: ["Electron.js", "React", "SQLite", "Thermal Printing"]
      
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* HEADER */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Featured Projects</h1>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of our technical expertise and real-world impact.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 items-center group">

                {/* IMAGE */}
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold mb-4">
                    {project.category}
                  </span>

                  <h2 className="text-3xl font-bold mb-2 text-black group-hover:text-primary">
                    {project.title}
                  </h2>

                  <p className="text-primary font-medium mb-4">
                    Client: {project.client}
                  </p>

                  <p className="text-gray-600 text-lg mb-6">
                    {project.description}
                  </p>

                  {/* FEATURES */}
                  <div className="bg-gray-50 p-6 rounded-xl border mb-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Layers size={20} className="text-primary" /> Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ✔ Visit Project BUTTON (Only if link exists) */}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold flex items-center gap-2 mb-6 hover:text-black transition"
                    >
                      Visit Project <ExternalLink size={18} />
                    </a>
                  )}

                  {/* TECH TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-black text-white text-xs font-bold rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-xl mx-auto">
          Let's build something amazing together.
        </p>

        <Link 
          to="/contact"
          className="bg-primary text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto hover:bg-black transition"
        >
          Start a Conversation <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
};

export default Projects;
