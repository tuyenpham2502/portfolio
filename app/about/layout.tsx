import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
    title: "About - Tuyen Pham",
    description:
        "Learn more about Tuyen Pham, a passionate full-stack developer from Itahari, Nepal. Explore his journey, skills, education, and ambitions.",
    openGraph: {
        title: "About - Tuyen Pham",
        description:
            "Discover the story of Tuyen Pham, a young and ambitious web developer from Nepal, striving to build impactful web applications.",
        url: "https://tuyenpham.online/about",
        type: "website",
        images: '/IMG-20250217-WA0011.jpg',
    },
    twitter: {
        card: "summary_large_image",
        site: "@tuyenpham_",
        title: "About - Tuyen Pham",
        description:
            "Discover the journey and ambitions of Tuyen Pham, a full-stack developer passionate about technology and innovation.",
        images: '/IMG-20250217-WA0011.jpg',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Container>{children}</Container>;
}
