

import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const FAQDATA = [
    {
        id: 1,
        question: 'What are your delivery areas?',
        answer: 'We currently deliver to most areas within the city. During checkout, you can enter your address to check if we deliver to your location. For areas outside our standard delivery zone, please contact us for special arrangements.',
    },

    {
        id: 2,
        question: 'How long does delivery take?',
        answer: 'Standard delivery time is 30-45 minutes for regular orders. For bulk orders and catering services, we recommend placing your order at least 24 hours in advance to ensure timely preparation and delivery.',
    },

    {
        id: 3,
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery. All online payments are processed securely through our encrypted payment gateway.',
    },

    {
        id: 4,
        question: 'Can I customize my meal?',
        answer: 'Yes! We offer customization options for many of our dishes. You can specify dietary preferences, spice levels, and ingredient substitutions during the ordering process. For special dietary requirements, please contact us directly.',
    },

    {
        id: 5,
        question: 'Do you offer subscription plans for tiffin services?',
        answer: 'Yes, we offer flexible subscription plans for our daily tiffin service. You can choose from weekly, bi-weekly, or monthly plans with options for lunch, dinner, or both. Contact us to learn more about our subscription packages and pricing.',
    },

    {
        id: 6,
        question: 'What is your cancellation policy?',
        answer: 'You can cancel your order within 5 minutes of placing it for a full refund. For subscription services, cancellations must be made at least 24 hours before the next scheduled delivery. Please refer to our terms and conditions for detailed cancellation policies.',
    },

    {
        id: 7,
        question: 'Do you provide catering for events?',
        answer: 'Absolutely! We specialize in catering for events, parties, and corporate gatherings. We offer customizable menus to suit your event size and preferences. Please contact us at least 48 hours in advance to discuss your catering needs.',
    },
]

function Faq() {
  const [queIndex, setQueIndex] = useState(null);

  const handleSetQueIndex = (index) => {
    setQueIndex(queIndex === index ? null : index);
  };

  return (
    <div className="p-17 max-lg:px-3 max-lg:py-10">
      <h1 className="font-strike text-[3em]  max-md:text-[1.8em] text-[#0D4722] text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-black/70 my-5 max-md:text-[.9em]">
        Find answers to common questions about our services
      </p>

      <section>
        {FAQDATA.map((data) => (
          <div
            key={data.id}
            className="my-5 rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)]"
          >
            <h1
              onClick={() => handleSetQueIndex(data.id)}
              className="p-4 flex justify-between items-center text-[1.2em] max-md:text-[.9em] font-medium cursor-pointer text-[#0D4722]"
            >
              <span>{data.question}</span>

        
              <span className="text-xl">
                {queIndex === data.id ? <RxCross2 /> : <BsPlusLg />}
              </span>
            </h1>

           
            <div
              className={`overflow-hidden transition-all duration-300 ${
                queIndex === data.id ? "max-h-[500px] p-4" : "max-h-0 p-0"
              }`}
            >
              <p className="text-black/70">{data.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Faq;
