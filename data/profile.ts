import { title } from "node:process";

const profile = {
    email: 'tuyenpham250203@gmail.com',
    fullName: 'Tuyen Pham Ngoc',
    title: 'Web Developer',
    title2: 'Student',
    fistName: 'Tuyen',
    middleName: 'Pham',
    lastName: 'Ngoc',
    age: new Date().getFullYear() - 2003,
    location: 'VietNam',
    description: "I craft high-performance, future-ready solutions where speed meets precision. Every line of code I write is a blend of efficiency and structure, designed for scalability and long- term maintainability. For me, great development is about delivering fast without compromising on a solid, lasting foundation.",
    workExperience: [
        {
            link: 'https://nobisoft.com.vn/',
            name: 'Nobisoft',
            position: 'Web Developer',
            duration: 'Aug 2022 - Present',
        },
    ],
};
export default profile;