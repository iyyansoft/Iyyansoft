import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Cpu, Code, Users, Briefcase, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "makers-lab",
      icon: <Settings size={48} />,
      title: "Makers Lab / Idea Lab Setup",
      description: "We provide turnkey solutions for setting up Makers Labs at schools, colleges, universities, and innovation hubs. Our comprehensive approach ensures that your institution is equipped with the best tools to foster creativity and innovation.",
      features: [
        "Site Survey & Space Design: We analyze your available space to create an optimal layout that encourages collaboration and safety.",
        "Layout Planning: Strategic placement of workstations, equipment, and storage to maximize efficiency.",
        "Equipment & Tools Selection: Expert curation of 3D printers, PCB printers, laser cutters, CNC machines, and electronics workbenches.",
        "BOM Preparation with Budgeting: Detailed Bill of Materials with transparent pricing to help you plan your investment.",
        "Vendor Coordination & Procurement Support: We handle the sourcing of high-quality equipment from trusted vendors.",
        "SOP & Safety Documentation: Comprehensive Standard Operating Procedures and safety guidelines to ensure a secure working environment.",
        "Installation & Setup: Professional installation and calibration of all equipment.",
        "Training for Students & Faculty: Hands-on training sessions to ensure your team can effectively use and maintain the lab."
      ]
    },
    {
      id: "prototype-dev",
      icon: <Cpu size={48} />,
      title: "Prototype Development",
      description: "We transform your concepts into working models and MVPs. Whether you are a startup founder with a disruptive idea or a researcher testing a hypothesis, we bring your vision to life.",
      features: [
        "IoT & Embedded Systems: Development of smart connected devices using the latest microcontrollers and sensors.",
        "Web & Mobile Applications: Companion apps and dashboards for your hardware products.",
        "PCB Design & Fabrication: Professional circuit board design and manufacturing for reliable performance.",
        "Electronics Prototyping: Rapid breadboarding and soldering to test electronic circuits.",
        "Cloud Integration: Connecting your devices to the cloud for real-time data monitoring and control.",
        "Dashboard Development: Intuitive user interfaces to visualize data and manage devices.",
        "Automation Solutions: Custom automation systems for industrial and home applications."
      ],
      deliverables: [
        "Concept Model", "Prototype", "Working MVP", "Technical Documentation", "Cost & Manufacturing Feasibility Report"
      ]
    },
    {
      id: "it-services",
      icon: <Code size={48} />,
      title: "IT Services & Software Development",
      description: "Our software development team builds robust, scalable, and secure applications tailored to your business needs. We leverage modern technologies to deliver high-performance solutions.",
      features: [
        "Custom Web Application Development: Tailor-made web apps that solve specific business challenges.",
        "Mobile App Development: Native and cross-platform mobile applications for iOS and Android.",
        "API Development: Secure and scalable RESTful and GraphQL APIs for seamless integration.",
        "Full Stack Solutions: End-to-end development covering both frontend user interfaces and backend server logic.",
        "Cloud Deployment & Maintenance: Setting up and managing your infrastructure on AWS, Azure, or Google Cloud.",
        "UI/UX Design: User-centric design that ensures an intuitive and engaging experience.",
        "Automation Workflows: Streamlining business processes through digital automation."
      ]
    },
    {
      id: "lab-ops",
      icon: <Users size={48} />,
      title: "Lab Operations Support",
      description: "Setting up a lab is just the beginning. We provide ongoing operational support to ensure your Makers Lab remains a vibrant hub of activity and learning.",
      features: [
        "Annual Lab Operations Management: Comprehensive management of day-to-day lab activities.",
        "Consumables & Tools Planning: Regular inventory checks and restocking of essential materials.",
        "Student Project Mentoring: Guiding students through their innovation projects from ideation to execution.",
        "Workshop & Training Support: Organizing regular workshops on emerging technologies.",
        "Faculty Upskilling Programs: Training programs to keep faculty updated with the latest industry trends."
      ]
    },
    {
      id: "consulting",
      icon: <Briefcase size={48} />,
      title: "Consulting Services",
      description: "Leverage our industry expertise to make informed decisions. We provide strategic consulting to startups, educational institutions, and corporates.",
      features: [
        "Product Development Roadmap: Strategic planning for your product's journey from concept to market.",
        "Technical Feasibility Analysis: Assessing the viability of your technical ideas before investment.",
        "Innovation/Startup Support: Mentoring and guidance for early-stage startups.",
        "Funding Proposal Preparation: Assisting with technical documentation for grant and funding applications.",
        "Corporate Innovation Training: Workshops to foster an innovation mindset within your organization."
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to empower innovation and drive growth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
                <div className="lg:w-1/3 sticky top-24">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary">
                    <div className="text-primary mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-black transition-colors">
                      Get a Quote <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    What We Offer
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="flex items-start gap-3">
                          <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                          <p className="text-gray-700 leading-relaxed">
                            <span className="font-bold text-black block mb-1">{feature.split(':')[0]}</span>
                            {feature.split(':')[1]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {service.deliverables && (
                    <div className="bg-gray-900 text-white p-8 rounded-xl">
                      <h4 className="text-xl font-bold mb-4 text-primary">Key Deliverables</h4>
                      <div className="flex flex-wrap gap-3">
                        {service.deliverables.map((item, idx) => (
                          <span key={idx} className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We understand that every project is unique. Contact us to discuss your specific requirements and how we can help.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors">
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
