"use client"
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';

const data = [
  { Question: "How are you", Answer: "I am fine" },
  { Question: "What is your name", Answer: "My name is Taiwo Opadotun" },
  { Question: "What is your name", Answer: "My name is Taiwo Opadotun" },
  { Question: "What is your name", Answer: "My name is Taiwo Opadotun" }
];

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="p-4 w-full">
       {data.map((item, index) => (
        <div key={index} className="rounded-md p-2 m-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-semibold">{item.Question}</span>
            {open === index ? <FaMinus className="mr-2" /> : <FaPlus className="mr-2" />}
          </div>
          {open === index && (
            <div className="mt-2 text-gray-600">{item.Answer}</div>
          )}
        </div>
      )) }
    </div>
  );
};

export default Faq

