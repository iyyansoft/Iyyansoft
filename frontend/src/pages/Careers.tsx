import React from 'react';
import { Briefcase, Code, PenTool, Cpu, Mail, ArrowRight } from 'lucide-react';

const Careers = () => {
  const openings = [
    {
      title: "Embedded Developer",
      type: "Full-time",
      location: "Chennai",
      icon: <Cpu size={24} />,
      desc: "We are looking for an experienced Embedded Developer to join our prototyping team. You will be responsible for designing and programming microcontrollers for IoT applications."
    },
    {
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Chennai",
      icon: <Code size={24} />,
      desc: "Join our software team to build scalable web applications. Proficiency in React, Node.js, and database management is required."
    },
    {
      title: "Lab Technician / Makers Lab Coordinator",
      type: "Full-time",
      location: "On-site (Various Locations)",
      icon: <Briefcase size={24} />,
      desc: "Manage day-to-day operations of Makers Labs in educational institutions. You will mentor students and ensure equipment maintenance."
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Chennai",
      icon: <PenTool size={24} />,
      desc: "Create intuitive and visually appealing user interfaces for our web and mobile applications. Experience with Figma and prototyping tools is a must."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Work with Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join a team of passionate engineers, designers, and innovators building the future.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-black">Why Join IyyanSoft?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            At IyyanSoft Technologies, we don't just offer jobs; we offer careers. We provide a dynamic and collaborative environment where you can work on cutting-edge technologies, from IoT and robotics to cloud computing and AI. If you are passionate about innovation and want to make a real impact, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openings.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {job.icon}
                  </div>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> {job.location}
                </p>
                <p className="text-gray-600 mb-6">
                  {job.desc}
                </p>
                <a href="mailto:careers@iyyansoft.com" className="text-primary font-bold hover:text-black transition-colors flex items-center gap-2">
                  Apply Now <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <Mail size={48} className="mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Don't see a role that fits?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We are always looking for talented individuals. Send your resume to us, and we'll keep it on file for future opportunities.
          </p>
          <a href="mailto:iyyansoft@gmail.com" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors inline-block">
            iyyansoft@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
