"use client";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string | JSX.Element; // Allow string or JSX.Element for the answer
}

const faqs: FAQ[] = [
  {
    question: "What activities will be there?",
    answer:
      "There will be workshops, a massive Capture the Flag, a King of the Hill competition, free food, and the ability to network with students and employers!"
  },
  {
    question: "Who can attend RowdyCon?",
    answer:
	  (
		<>
		  RowdyCon is open to all San Antonio-based students, regardless of major or skill level. We welcome anyone interested in learning more about cybersecurity. We have workshops and opportunities accessible for every level including beginners! Volunteers not fitting those qualifications are welcomed and can sign up{" "}
		  <a href="https://forms.gle/G8t8UQxiQLGbFLVE9" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
			here
		  </a>
		  .
		</>
	  )
  },
  {
    question: "How much does it cost?",
    answer:
      "RowdyCon is free to all San Antonio-based students! Breakfast, lunch, dinner, and snacks will be served, so come hungry!"
  },
  {
    question: "Do I need experience to attend?",
    answer:
      "Nope! We have something for anyone and everyone. There are plenty of workshops that will help you learn new skills during the conference!" 
  },
  {
    question: "How do we get to San Pedro I at and where should we park?",
    answer: (
      <>
        San Pedro I is located at UTSA's downtown campus at 506 Dolorosa St, San Antonio, TX 78204. We recommend driving,
        carpooling, or taking the VIA. All UTSA students get a free, unlimited
        bus pass that can be accessed{" "}
        <a href="https://www.utsa.edu/campusservices/runner/via.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          here
        </a>
        . There are multiple convenient pickup/drop off points. There is free parking available in the Dolorosa lot (unmarked spaces only), D1, D2, and D3 or paid parking in the downtown garage or the Bexar County garage. A map of UTSA's downtown campus can be found{" "}
		<a href="https://www.utsa.edu/campusservices/docs/Park-Trans-Map_Downtown-Campus.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          here
        </a> and UTSA's weekend parking rules can be found {" "} 
		<a href="https://www.utsa.edu/campusservices/parking/permits.html#w1" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          here
        </a>.
      </>
    )
  },
  {
    question: "What if I can't attend in-person?",
    answer:
      "All good! We have certain events available online. The CTF will also be fully available online. If you win/place, we can ship your prize to you! Make sure to enter number 47 on the registration form to note you are attending online." 
  },
  {
    question: "What is the event schedule and what time should I show up?",
    answer:
	  (
		<>
		  The schedule can be found{" "}
		  <a href="https://rowdycon.notion.site/Schedule-daa0ea305ea34133ac68e517e185ea41?pvs=4" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
			here
		  </a>
		  . Check-in opens at 7:30am and runs until 8:30am when the first events start!
		</>
	  )
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your college ID, identification showing you are over 18 years old, a laptop, a charger, and anything else you may need. Popular items include monitors, power strips, and blankets! Items such as weapons, alcohol, and illegal drugs are not allowed."
  },
  {
    question: "Still have questions?",
    answer:
      "Feel free reach out to publicly or privately on the discord channel or email us at admin@rowdycon.org!"
  }
];

export default function WorkWithUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex w-full flex-col items- text-left justify-center">
      <h1 className="text-left text-4xl font-black md:text-5xl px-5 py-3">
        FAQs
      </h1>

      {/* FAQ Section */}
      <div className="w-full px-4 py-10">
        {/* Responsive columns: 1 column on mobile, 2 on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index: number) => (
            <div key={index} className="w-full">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-5 py-4 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center justify-between"
				style={{ backgroundColor: '#ff6347' }}
              >
                {/* Arrow */}
                <span>{faq.question}</span>
                <span className="ml-2">
                  {openIndex === index ? "▼" : "▶"}
                </span>
              </button>

              {/* Answer (conditional rendering based on state) */}
              {openIndex === index && (
                <div className="px-5 py-3 bg-gray-100 rounded-lg text-black">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
