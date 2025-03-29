import React from "react";

interface EducationItemProps {
    logo: React.ReactNode;
    institution: string;
    degree: string;
    dateRange: string;
    description: string;
}

const EducationItem = ({ logo, institution, degree, dateRange, description }: EducationItemProps) => (
    <div className="flex gap-4 mb-8">
        <div className="flex-shrink-0">
            {logo}
        </div>
        <div className="flex flex-col">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{institution}</h3>
            <p className="text-gray-800 dark:text-gray-300">{degree}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                <span className="bg-[#7AC594] dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-4 py-1 rounded-full">{dateRange}</span>
            </p>
            <p className="text-gray-800 dark:text-gray-300 mt-2">{description}</p>
        </div>
    </div>
);

const Education = () => {
    const educationItems = [
        {
            logo: (
                <img
                    src="/img/kma-logo.jpeg"
                    alt="Kma logo"
                    className="w-13 h-12 rounded-full overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            ),
            institution: "Vietnam Academy of Cryptography Techniques",
            degree: "Engineer in Electronics and Telecommunications",
            dateRange: "2022 - Present",
            description: "Specialized in telecommunication systems, embedded systems, and network security. Skilled in circuit design, signal processing, and secure communications."
        }
    ];

    return (
        <div className="w-full max-w-2xl p-6 rounded-lg">
            {educationItems.map((education, index) => (
                <EducationItem key={index} {...education} />
            ))}
        </div>
    );
};

export default Education;
