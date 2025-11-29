import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Do you set up Makers Labs for schools and colleges?",
      answer: "Yes, absolutely. We offer end-to-end lab setup solutions customized to the specific educational needs of schools, colleges, and universities. Our services range from initial space planning and design to equipment procurement, installation, and faculty training. We ensure that the lab curriculum aligns with the institution's academic goals."
    },
    {
      question: "Do you help with prototype development for startups?",
      answer: "Absolutely. We support startups throughout their product development journey, from idea validation to MVP (Minimum Viable Product) development. Our team of engineers and designers works closely with founders to refine their concepts, build functional prototypes, and prepare for manufacturing or investor demonstrations."
    },
    {
      question: "How long does it take to set up a Makers Lab?",
      answer: "The timeline for setting up a Makers Lab usually ranges from 4 to 10 weeks. This duration depends on several factors, including the size of the space, the scope of equipment required, and the complexity of the infrastructure. We provide a detailed project schedule during the consultation phase to ensure timely delivery."
    },
    {
      question: "Do you provide training after lab setup?",
      answer: "Yes, training is a core part of our service. We don't just install equipment; we ensure your team knows how to use it effectively. We conduct comprehensive workshops for students, specialized training programs for faculty, and ongoing mentoring sessions to foster a culture of innovation within the lab."
    },
    {
      question: "What kind of post-setup support do you offer?",
      answer: "We offer annual maintenance contracts (AMC) and operational support packages. This includes regular equipment maintenance, software updates, restocking of consumables, and technical troubleshooting. We also provide continued curriculum support to keep the lab activities relevant and engaging."
    },
    {
      question: "Can you help with funding proposals for labs?",
      answer: "Yes, we assist educational institutions and incubators in preparing technical documentation and budget proposals for grants and funding. Our expertise helps in creating compelling proposals that highlight the educational and innovative impact of the proposed lab."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  className={`w-full flex items-center justify-between p-6 text-left font-bold text-lg transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className={openIndex === index ? 'text-white' : 'text-primary'} />
                    {faq.question}
                  </span>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
