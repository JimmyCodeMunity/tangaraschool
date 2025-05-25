import React from 'react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "Who can access mental health services?",
        answer: "Anyone experiencing mental health challenges, emotional distress, or seeking personal development can access these services."
    },
    {
        question: "Where can I find mental health services?",
        answer: "Mental health services are available in hospitals, private clinics, community centers, schools, and online platforms. You can also reach out to helplines for immediate support."
    },
    {
        question: "Do I need a referral to see a mental health professional?",
        answer: "Not always. While psychiatrists may require a referral from a doctor, psychologists, counselors, and therapists can often be accessed directly."
    },
    {
        question: "What types of mental health professionals are available?",
        answer: "Psychiatrists (medical doctors who can prescribe medication), Psychologists (focus on therapy and assessments), Counselors/Therapists (provide talk therapy), Social Workers (offer support and connect people to resources)."
    },
    {
        question: "What is the difference between therapy and counseling?",
        answer: "Counseling usually focuses on specific problems for a short time, while therapy tends to be longer-term and explores deeper emotional issues."
    },
    {
        question: "Are online mental health services effective?",
        answer: "Yes! Many people find online therapy convenient, affordable, and just as effective as in-person sessions."
    }
];

const Faq = () => {
    return (
        
        <div className="bg-white md:grid gap-4 grid-cols-2">
            <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
                <div className="mx-auto px-5">
                    <div className="flex flex-col items-center">
                        <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                        <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequently asked questions</p>
                    </div>
                    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                        {faqs.map((faq, index) => (
                            <div key={index} className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span>{faq.question}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">{faq.answer}</p>
                                </details>
                            </div>
                        ))}
                    </div>
                    <Link to="/faq" className="cursor-pointer">
                        <button class="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center bg-black justify-between transition-all duration-500 hover:bg-[#724B62]">
                            View More
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>

                        </button>
                    </Link>
                </div>


            </div>
            <div className="w-full">
                <img src="../images/tangaraschool5.jpg" alt="" className="object-cover md:rounded-tl-3xl md:rounded-bl-full" />
            </div>
        </div>
    );
};

export default Faq;