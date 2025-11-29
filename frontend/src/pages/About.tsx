import React from 'react';
import { Target, Eye, Heart, Star, Shield, Users, Zap, Layers, PenTool, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Driving innovation through technology, education, and practical solutions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                alt="IyyanSoft Team" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Who We Are</h2>
              <h3 className="text-4xl font-bold text-black mb-6">Innovators at Heart, Technologists by Profession</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                IyyanSoft Technologies is an innovation-driven technology company providing IT services, Makers Lab setup consultancy, and prototype development support for institutions and enterprises. We help organizations bring ideas to life by combining technical expertise, hands-on prototyping, and real-world problem-solving.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded with a passion for technology and education, we have grown into a trusted partner for universities, startups, and businesses across Tamil Nadu and beyond. Our team comprises engineers, designers, and strategists who are dedicated to pushing the boundaries of what's possible.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that true innovation happens when theory meets practice. That's why we focus not just on software, but on the physical realization of ideas through our Makers Lab setups and hardware prototyping services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower students, researchers, startups, and businesses to innovate through accessible lab infrastructure, world-class technical support, and practical technology solutions. We aim to democratize access to technology, enabling anyone with an idea to turn it into a reality. We strive to bridge the gap between academia and industry by providing the tools and knowledge necessary for the next generation of innovators.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-black">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-black" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be a leading enabler of Makers Labs and innovation ecosystems across India. We envision a future where every educational institution and innovation hub is equipped with state-of-the-art facilities that foster creativity and problem-solving. We aspire to be the catalyst that transforms India into a global hub for innovation and product development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Our Culture</h2>
            <h3 className="text-4xl font-bold mb-6">Core Values</h3>
            <p className="text-gray-400 text-lg">
              Our values define who we are and how we work. They guide our decisions and shape our interactions with clients, partners, and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <Lightbulb size={32} />, title: "Innovation", desc: "We constantly seek new and better ways to solve problems." },
              { icon: <Shield size={32} />, title: "Integrity", desc: "We are honest, transparent, and ethical in all our dealings." },
              { icon: <Star size={32} />, title: "Quality", desc: "We deliver excellence in every project, big or small." },
              { icon: <Heart size={32} />, title: "Affordability", desc: "We believe technology should be accessible to everyone." },
              { icon: <Users size={32} />, title: "Customer-Centric", desc: "Your success is our priority. We listen, understand, and deliver." }
            ].map((value, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors group">
                <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors text-primary group-hover:text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Unique Approach" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Why Us</h2>
              <h3 className="text-4xl font-bold text-black mb-8">What Makes Us Unique</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <PenTool size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Tailored Makers Lab Solutions</h4>
                    <p className="text-gray-600">
                      We don't offer one-size-fits-all solutions. We design Makers Labs specifically for schools, colleges, and incubators, considering their unique needs, space, and budget.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Cross-Domain Expertise</h4>
                    <p className="text-gray-600">
                      Our team possesses deep expertise across multiple domains including Electronics, IoT, Web Development, Cloud Computing, AI, and Mobile App Development. This allows us to build integrated solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Hands-on Mentorship</h4>
                    <p className="text-gray-600">
                      We provide long-term innovation support and hands-on mentorship. We don't just deliver a product; we empower your team to maintain and evolve it.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">End-to-End Services</h4>
                    <p className="text-gray-600">
                      From the initial concept to final deployment and maintenance, we handle every stage of the project lifecycle, ensuring a seamless and hassle-free experience for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
