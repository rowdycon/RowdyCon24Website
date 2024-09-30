import { Link } from "lucide-react";
import { Accordion,AccordionTrigger, AccordionItem, AccordionContent } from "../shadcn/ui/accordion";
import { Button } from "../shadcn/ui/button";

export default function WorkWithUs() {
  const faqs = [
		{
			question: "What activities will be there?",
			answer: (
				<>
					"There will be workshops, a massive Capture the Flag, a King
					of the Hill competition, free food, and the ability to
					network with students and employers!"
				</>
			),
		},
		// {
		// 	question: "Who can attend RowdyCon?",
		// 	answer: (
		// 		<>
		// 			RowdyCon is open to all San Antonio-based students,
		// 			regardless of major or skill level. We welcome anyone
		// 			interested in learning more about cybersecurity. We have
		// 			workshops and opportunities accessible for every level
		// 			including beginners! Volunteers not fitting those
		// 			qualifications are welcomed and can sign up{" "}
		// 			<Link
		// 				href="https://forms.gle/G8t8UQxiQLGbFLVE9"
		// 				target="_blank"
		// 				className="text-blue-500 underline"
		// 			>
		// 				here
		// 			</Link>
		// 			.
		// 		</>
		// 	),
		// },
		// {
		// 	question: "How much does it cost?",
		// 	answer: (
		// 		<>
		// 			"RowdyCon is free to all San Antonio-based students!
		// 			Breakfast, lunch, dinner, and snacks will be served, so come
		// 			hungry!"
		// 		</>
		// 	),
		// },
		// {
		// 	question: "Do I need experience to attend?",
		// 	answer: (
		// 		<>
		// 			"Nope! We have something for anyone and everyone. There are
		// 			plenty of workshops that will help you learn new skills
		// 			during the conference!"
		// 		</>
		// 	),
		// },
		// {
		// 	question:
		// 		"How do we get to San Pedro I at and where should we park?",
		// 	answer: (
		// 		<>
		// 			San Pedro I is located at UTSA's downtown campus at 506
		// 			Dolorosa St, San Antonio, TX 78204. We recommend driving,
		// 			carpooling, or taking the VIA. All UTSA students get a free,
		// 			unlimited bus pass that can be accessed{" "}
		// 			<Link
		// 				href="https://www.utsa.edu/campusservices/runner/via.html"
		// 				target="_blank"
		// 				className="text-blue-500 underline"
		// 			>
		// 				here
		// 			</Link>
		// 			. There are multiple convenient pickup/drop off points.
		// 			There is free parking available in the Dolorosa lot
		// 			(unmarked spaces only), D1, D2, and D3 or paid parking in
		// 			the downtown garage or the Bexar County garage. A map of
		// 			UTSA's downtown campus can be found{" "}
		// 			<Link
		// 				href="https://www.utsa.edu/campusservices/docs/Park-Trans-Map_Downtown-Campus.pdf"
		// 				target="_blank"
		// 				className="text-blue-500 underline"
		// 			>
		// 				here
		// 			</Link>{" "}
		// 			and UTSA's weekend parking rules can be found{" "}
		// 			<Link
		// 				href="https://www.utsa.edu/campusservices/parking/permits.html#w1"
		// 				target="_blank"
		// 				className="text-blue-500 underline"
		// 			>
		// 				here
		// 			</Link>
		// 			.
		// 		</>
		// 	),
		// },
		// {
		// 	question:
		// 		"What is the event schedule and what time should I show up?",
		// 	answer: (
		// 		<>
		// 			The schedule can be found{" "}
		// 			<Link
		// 				href="https://rowdycon.notion.site/Schedule-daa0ea305ea34133ac68e517e185ea41?pvs=4"
		// 				target="_blank"
		// 				className="text-blue-500 underline"
		// 			>
		// 				here
		// 			</Link>
		// 			. Check-in opens at 7:30am and runs until 8:30am when the
		// 			first events start!
		// 		</>
		// 	),
		// },
		// {
		// 	question: "What should I bring?",
		// 	answer: (
		// 		<>
		// 			"Bring your college ID, identification showing you are over
		// 			18 years old, a laptop, a charger, and anything else you may
		// 			need. Popular items include monitors, power strips, and
		// 			blankets! Items such as weapons, alcohol, and illegal drugs
		// 			are not allowed.",
		// 		</>
		// 	),
		// },
		// {
		// 	question: "Still have questions?",
		// 	answer: (
		// 		<>
		// 			"Feel free reach out to publicly or privately on the discord
		// 			channel or email us at admin@rowdycon.org!"
		// 		</>
		// 	),
		// },
  ];

  return (
		<section className="items- flex w-full flex-col justify-center text-left">
			<h1 className="px-5 py-3 text-left text-4xl font-black md:text-5xl">
				FAQs
			</h1>
			{/* FAQ Section */}
			<div className="w-full px-4 py-10">
				{/* Responsive columns: 1 column on mobile, 2 on larger screens */}
				<Accordion
					type="single"
					collapsible
					className="grid grid-cols-1 gap-6 md:grid-cols-2"
				>
					{faqs.map((faq, index: number) => (
						<div key={index} className="w-full">
							{/* Question Button */}
							<AccordionItem value={`faq-item-${index}`}>
								<AccordionTrigger asChild>
									<Button
										className="flex w-full items-center justify-between rounded-lg px-5 py-4 text-left font-semibold text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
										style={{ backgroundColor: "#ff6347" }}
									>
										{faq.question}
									</Button>
								</AccordionTrigger>
								<AccordionContent className="rounded-lg bg-gray-100 px-5 py-3 text-black">
									<>
										"There will be workshops, a massive
										Capture the Flag, a King of the Hill
										competition, free food, and the ability
										to network with students and employers!"
									</>
								</AccordionContent>
							</AccordionItem>
						</div>
					))}
				</Accordion>
			</div>
		</section>
  );
}
