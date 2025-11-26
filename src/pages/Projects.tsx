import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Layers, Code, Database, Server, Cpu, Wifi, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Water Quality Monitoring System",
      client: "Mukil Water",
      category: "IoT & Cloud",
      image: "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description: "A comprehensive IoT solution designed to monitor water quality parameters in real-time. This system was developed to ensure safe drinking water standards are met consistently across multiple distribution points.",
      features: [
        "IoT-based water sensor module capable of measuring pH, turbidity, and TDS levels.",
        "Real-time data transmission to a centralized cloud server via Wi-Fi/GSM.",
        "Interactive cloud dashboard for administrators to track quality metrics across different locations.",
        "Automated alert system via SMS/Email for parameter deviations.",
        "Fully functional prototype ready for pilot deployment and mass manufacturing."
      ],
      tech: ["ESP32", "IoT Sensors", "AWS IoT", "React Dashboard", "Node.js"]
    },
    {
      title: "EventzGo – Event Ticketing Platform",
      client: "EventzGo",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description: "A robust event ticketing and management platform built to streamline the entire event lifecycle. From ticket creation to attendee check-in, EventzGo handles it all with an intuitive user interface.",
      features: [
        "Complete Frontend + Backend development ensuring a seamless user experience.",
        "Secure Payment Gateway integration supporting multiple payment modes (UPI, Cards, Netbanking).",
        "Comprehensive Admin panel for event organizers to manage sales, inventory, and analytics.",
        "QR code-based ticket generation and scanning system for fast entry management.",
        "Responsive design optimized for both desktop and mobile users."
      ],
      tech: ["React", "Node.js", "MongoDB", "Stripe/Razorpay", "Express"]
    },
    {
      title: "Makers Lab Setup",
      client: "Educational Institutions",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description: "Establishment of state-of-the-art Makers Labs in various educational institutions to foster innovation and hands-on learning among students. These labs serve as incubators for the next generation of inventors.",
      features: [
        "Custom Lab design optimizing space for collaboration and safety.",
        "End-to-end Equipment purchase support including 3D printers, laser cutters, and electronics stations.",
        "Development of specialized Training modules for faculty and students.",
        "Ongoing Student prototype development support and mentorship.",
        "Creation of a vibrant innovation ecosystem within the campus."
      ],
      tech: ["3D Printing", "Laser Cutting", "Electronics", "Robotics", "PCB Design"]
    },
    {
      title: "Retail Billing Automation",
      client: "Muthamil Super Market",
      category: "Enterprise Software",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description: "A custom Point of Sale (POS) and inventory management system designed to automate retail operations. This solution significantly reduced checkout times and improved inventory accuracy.",
      features: [
        "Fast and reliable POS automation handling high-volume transactions.",
        "Real-time Stock and inventory alerts to prevent stockouts.",
        "Comprehensive Dashboard reporting for sales analysis and forecasting.",
        "Barcode scanner integration for rapid product entry.",
        "Multi-user role management for cashiers and managers."
      ],
      tech: ["Electron.js", "React", "SQLite", "Thermal Printing", "Barcode Integration"]
    },
    {
      title: "SPM Gospel FM – Digital Infrastructure",
      client: "SPM Gospel FM",
      category: "Media & Streaming",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description: "Complete digital transformation and infrastructure support for a radio station, enabling them to reach a global audience through digital channels.",
      features: [
        "Full Website support and maintenance ensuring high availability.",
        "Seamless Live streaming integration for uninterrupted audio broadcasting.",
        "Mobile-responsive design for listeners on the go.",
        "Archive management system for past broadcasts.",
        "Ongoing Technical maintenance and server optimization."
      ],
      tech: ["Audio Streaming", "Web Development", "Server Management", "CDN", "Analytics"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Featured Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of our technical expertise and the value we deliver to our clients.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 items-center group">
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    {project.category}
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-black group-hover:text-primary transition-colors">{project.title}</h2>
                  <p className="text-primary font-medium mb-6">Client: {project.client}</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Layers size={20} className="text-primary" /> Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-black text-white text-xs font-bold rounded">
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to build something amazing. Our team is ready to bring your vision to life.
          </p>
          <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-colors inline-flex items-center gap-2">
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
