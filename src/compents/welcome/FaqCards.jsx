import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { colors } from '../../constant/color';

const FaqCards = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0); // First card open by default

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {data.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="p-6 bg-neutral-900 max-w-xl w-full mx-auto flex flex-col mt-10 rounded-2xl border border-white/15 transition-all duration-500 ease-in-out"
          >
            {/* Question Row */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <h1
                style={{ fontFamily: '', fontWeight: 500 }}
                className="text-white text-left font-semibold text-md"
              >
                {faq.question}
              </h1>
              <FaPlus
                className={`transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : 'rotate-0'
                }`}
                color={colors.primary}
                size={20}
              />
            </div>

            {/* Answer (Expandable) */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? 'mt-4 opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
              }`}
            >
              <p className="text-white/60 text-xs">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FaqCards;
