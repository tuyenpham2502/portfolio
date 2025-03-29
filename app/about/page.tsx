"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { BlurFadeImage, BlurFadeContent } from "@/components/BlurFade";
import Education from "@/components/Education";
import ImageGrid from "@/components/ImageGrid";
import Timeline from "@/components/Timeline";

const About = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Container>
            <section className="py-12 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12">
                    <div className="w-full">
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Hi, I'm Pham Ngoc Tuyen from Vietnam
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            A passionate software engineer with experience in full-stack development, specializing in React, Next.js, and Node.js. I thrive on building efficient and scalable applications that enhance user experiences.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            With a strong foundation in web technologies and a commitment to continuous learning, I am always seeking innovative solutions to complex challenges.
                        </p>
                        <blockquote className="relative border-l-4 border-gray-400 dark:border-gray-600 pl-6 italic text-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <span className="absolute -top-3 left-2 text-4xl text-gray-400 dark:text-gray-600">“</span>
                            Strive not to be a success, but rather to be of value.
                            <span className="absolute -bottom-3 right-2 text-4xl text-gray-400 dark:text-gray-600">”</span>
                        </blockquote>
                    </div>
                    {isLargeScreen && (
                        <div className="flex flex-col items-center top-40 self-start">
                            <div className="relative rounded-md w-48 h-full">
                                <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700">
                                    <div className="w-56 h-72 text-gray-800">
                                        <div className="flex flex-row justify-between opacity-90">
                                            <Image
                                                src="/IMG-20250217-WA0011.jpg"
                                                alt="Manish Tamang"
                                                width={200}
                                                height={200}
                                                className="w-full h-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute bg-gray-50 dark:bg-neutral-900 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                                        <span className="text-[#38A662] font-bold text-xs">Hover here</span>
                                        <span className="text-[#38A662] font-bold font-peachi text-3xl">Pham Tuyen</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            With years of experience in software development, I have contributed to numerous projects, delivering high-quality solutions for clients in various industries.
                        </p>
                        <h2 className="text-2xl font-semibold mt-10 mb-4">Key Skills</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Full-Stack Development:</strong> Proficient in both front-end and back-end technologies.</li>
                            <li><strong>Problem Solving:</strong> Strong analytical skills and ability to tackle complex challenges.</li>
                            <li><strong>Continuous Learning:</strong> Always exploring new technologies to stay ahead in the industry.</li>
                        </ul>
                        <h2 className="text-2xl font-semibold mt-10 mb-4">Education</h2>
                        <Education />
                    </div>
                </div>
                <Timeline />
            </section>
        </Container>
    );
};

export default About;