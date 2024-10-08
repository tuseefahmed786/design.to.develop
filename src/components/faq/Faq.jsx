import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item border-gray-200">
      <button
        className="w-full text-left py-9 px-6 flex justify-between shadow-sm items-center bg-white rounded-lg mb-2"
        onClick={toggleFAQ}
      >
        <span className="font-semibold text-xl md:text-2xl text-black">{question}</span>
        <span className={`transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="faq-content px-6 pb-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

function Faq() {
  const faqs = [
    {
      question: 'How long will it take to get my digital product built?',
      answer: 'Depending on complexity, up to 6 months.'
    },
    {
      question: 'Why is a subscription the way to go for my startup?',
      answer: 'Subscription models provide predictable revenue and customer loyalty.'
    },
    {
      question: 'What services are included in this subscription?',
      answer: 'The subscription includes all necessary services for your digital product development.'
    },
  ];

  return (
    <div className="px-3 md:px-10 mx-auto mt-10 mb-10">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
