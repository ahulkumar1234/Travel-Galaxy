import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
    const faqs = [
        {
            id: 1,
            question: "What is Galaxy Travel?",
            answer:
                "Galaxy Travel is a futuristic travel company offering luxury space tours and cosmic adventures across destinations like the Moon, Mars, and beyond.",
        },
        {
            id: 2,
            question: "Do I need any special training for space travel?",
            answer:
                "Yes, every traveler goes through a short 3-day zero-gravity and safety training session before departure to ensure a safe and fun experience.",
        },
        {
            id: 3,
            question: "Are the space tours safe?",
            answer:
                "Absolutely! All our spacecrafts are certified by the Galactic Safety Authority and piloted by expert astronauts with years of experience.",
        },
        {
            id: 4,
            question: "What is included in the travel package?",
            answer:
                "Our packages include transport, accommodation, meals, astronaut training, and guided cosmic experiences at your chosen destination.",
        },
        {
            id: 5,
            question: "Can I customize my space travel package?",
            answer:
                "Yes, we offer fully customizable packages — you can choose your planet, travel duration, and even onboard experiences.",
        },
        {
            id: 6,
            question: "How can I book a trip with Galaxy Travel?",
            answer:
                "You can book directly on our website by clicking the ‘Book Now’ button under any package or contact our team for assistance.",
        },
        {
            id: 7,
            question: "Is space travel suitable for kids or elderly travelers?",
            answer:
                "Space travel is open to everyone aged 12–65. However, we conduct a quick medical check to ensure passengers are fit for space conditions.",
        },
        {
            id: 8,
            question: "Do you offer group or corporate space trips?",
            answer:
                "Yes, we organize special group tours, corporate retreats, and educational missions with discounted group rates.",
        },
        {
            id: 9,
            question: "Where do space tours depart from?",
            answer:
                "All our journeys begin at the Galaxy Launch Base, located near Cape Spaceport, Earth — easily reachable via our shuttle services.",
        },
        {
            id: 10,
            question: "What if my trip gets canceled due to weather or technical issues?",
            answer:
                "In case of unavoidable delays or cancellations, you’ll receive a full refund or be rescheduled for the next available launch window.",
        },
    ];


    const [show, setshow] = useState(null);

    const handletoggle = (i) => {
        setshow(show === i ? null : i); // toggle open/close
    };

    return (
        <>
            <h1 className="heading text-center text-4xl font-semibold text-white my-6">
                🌌 FAQ's
            </h1>

            <section className="faq text-white flex flex-col items-center">
                <div className="w-full max-w-4xl space-y-3">
                    {faqs.map((item, i) => (
                        <div
                            className="faq-content rounded bg-gray-800 p-5 cursor-pointer transition-all duration-300 hover:bg-gray-700"
                            key={item.id}
                            onClick={() => handletoggle(i)} // ✅ Fixed here
                        >
                            <div className="question flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-blue-400">
                                    {item.question}
                                </h2>
                                <IoIosArrowDown
                                    className={`text-xl text-blue-300 transition-transform duration-300 ${show === i ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${show === i ? "max-h-40" : "max-h-0"
                                    }`}
                            >
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Faq;
