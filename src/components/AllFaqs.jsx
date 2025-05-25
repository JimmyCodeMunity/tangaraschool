import React from 'react';

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
    },
    {
        question: "How much do mental health services cost?",
        answer: "Costs vary depending on the provider, location, and type of service."
    },
    {
        question: "Does insurance cover mental health treatment?",
        answer: "Some health insurance plans cover therapy, counseling, and psychiatric care. It’s best to check with your provider."
    },
    {
        question: "Are mental health services confidential?",
        answer: "Yes, professionals are bound by confidentiality laws. However, they may break confidentiality if there is a risk of harm to yourself or others."
    },
    {
        question: "How can I encourage a loved one to seek help?",
        answer: "Approach them with empathy, offer support, and share available resources without pressure."
    },
    {
        question: "What if I feel ashamed to seek help?",
        answer: "Mental health is just as important as physical health. Seeking help is a sign of strength, not weakness."
    },
    {
        question: "What should I do in a mental health crisis?",
        answer: "Call a mental health crisis helpline, contact Mentheal personnel through the App or contacts provided, visit a hospital or emergency room if needed, or reach out to a trusted person for immediate support."
    },
    {
        question: "How do I know if I need urgent mental health care?",
        answer: "If you are experiencing suicidal thoughts, severe distress, or uncontrollable emotions, seek help immediately from a crisis hotline or emergency service."
    }
];

const AllFaqs = () => {
    return (
        <div className="bg-white w-full">
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
                </div>
            </div>
            
        </div>
    );
};

export default AllFaqs;