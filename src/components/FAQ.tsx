import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: 'How long does the battery last?',
    answer:
      'Battery life varies by model. The Standard model offers up to 30 hours, the Pro model up to 40 hours, and the Elite model up to 50 hours of playback time on a single charge. All models feature quick charging capabilities.',
  },
  {
    question: 'Are these headphones compatible with all devices?',
    answer:
      'Yes, our headphones are compatible with any device that supports Bluetooth connectivity, including iOS, Android, Windows, and macOS devices. The Pro and Elite models also support multi-device pairing.',
  },
  {
    question: 'How effective is the noise cancellation?',
    answer:
      'Our noise cancellation technology varies by model. The Elite model features our most advanced noise cancellation, capable of reducing ambient noise by up to 95%. The Pro model reduces noise by up to 85%, while the Standard model offers basic noise reduction.',
  },
  {
    question: 'What is the warranty period?',
    answer:
      'The Standard model comes with a 1-year warranty, the Pro model with a 2-year warranty, and the Elite model with a 3-year warranty. All warranties cover manufacturing defects and hardware malfunctions.',
  },
  {
    question: "Can I return the headphones if I'm not satisfied?",
    answer:
      "Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return the headphones for a full refund within 30 days of purchase.",
  },
  {
    question: 'How do I clean and maintain my headphones?',
    answer:
      'We recommend wiping the ear cups and headband with a soft, slightly damp cloth. For the ear cushions, use a dry cloth. Avoid using alcohol, cleaning solvents, or excessive moisture. Store your headphones in the provided case when not in use.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">FAQ</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Frequently asked questions
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Find answers to common questions about our headphones.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto divide-y-2 divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFaq(index)}
                className="text-left w-full flex justify-between items-start text-gray-400"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6 h-7 flex items-center">
                  <ChevronRight
                    className={`${
                      openIndex === index ? 'transform rotate-90' : ''
                    } h-6 w-6 transition-transform duration-200`}
                  />
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;