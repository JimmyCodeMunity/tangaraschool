import React from 'react';

const services = [
    {
        title: "Online Therapy & Counseling Services",
        description: [
            "Individual therapy",
            "Couples and family therapy",
            "Group therapy",
            "Child and adolescent counseling"
        ],
        image: "../images/tele.png",
    },
    {
        title: "Digital & Online Mental Health Support",
        description: [
            "Mobile apps for mental well-being (meditation, journaling, mood tracking)",
            "Online therapy sessions (via video calls, chat, or email counseling)",
            "Mental health blogs, podcasts, and online content"
        ],
        image: "https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg",
    },
    {
        title: "Coaching & Personal Development",
        description: [
            "Mental wellness coaching (helping individuals develop coping strategies and resilience)",
            "Neuro-Linguistic Programming (NLP) coaching (for mindset transformation)",
            "Life coaching for stress, confidence, and personal growth",
            "Career coaching & workplace mental health support"
        ],
        image: "https://img.freepik.com/free-photo/business-people-office-meeting_53876-103954.jpg"
    },
    {
        title: "Corporate & Workplace Mental Health Programs",
        description: [
            "Employee Assistance Programs (EAPs)",
            "Stress management and resilience training",
            "Work-life balance workshops",
            "Mental health first aid training for HR & managers",
            "Burnout prevention programs"
        ],
        image: "https://img.freepik.com/free-photo/successful-business-team_53876-64860.jpg"
    },
    {
        title: "Awareness & Educational Services",
        description: [
            "Mental health workshops and webinars",
            "School-based mental health programs",
            "Community outreach and awareness campaigns",
            "Online and physical mental health resources"
        ],
        image: "https://img.freepik.com/free-photo/teacher-students-using-laptop_53876-95801.jpg"
    }
];

const Programs = () => {
    return (
        <div className="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
            <div className="w-full sm:py-16 py-6 flex-col justify-start items-center gap-2.5 flex">
                <h2 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">Programs</h2>
            </div>
            {services.map((service, index) => (
                <div key={index} className="relative">
                    <div className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                        <div className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-white via-gray-900 to-amber-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-black">{service.title}</h2>
                                    <ul className="mt-4 text-lg text-neutral-500 list-disc pl-5">
                                        {service.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-gradient-to-r from-white via-gray-900 to-amber-300 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm" href="/login">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className={`${index % 2 === 1 ? ' pr-6 md:-ml-16' : ' pl-6 md:-mr-2'} lg:relative lg:m-0 lg:h-full lg:px-0`}>
                                <img loading="lazy" width="647" height="486" className={`w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute ${index % 2 === 1 ? 'lg:right-0' : 'lg:left-0'} lg:h-full lg:w-auto lg:max-w-none`} src={service.image} alt={service.title} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Programs;
