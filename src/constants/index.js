import { doleBicol } from "../assets/images";
import {
    contact,
    css,
    github,
    html,
    javascript,
    react,
    php,
    laravel,
    python,
    ai,
    flutter,
    dts,
    aims,
    pickleball,
    wagewise
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Mobile Development",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: ai,
        name: "AI",
        type: "AI Development",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];

export const experiences = [
    {
        title: "System and Mobile Developer",
        company_name: "DOLE Bicol RO5",
        icon: doleBicol,
        iconBg: "#f3f7ff",
        date: "July 2025 - Present",
        points: [
            "Developing and maintaining web applications using Laravel and other related technologies.",
            "Building mobile-focused features and interfaces with Flutter to support accessible, responsive government service workflows.",
            "Designing and improving system modules with PHP, Laravel, JavaScript, and database-backed application logic.",
            "Collaborating with coworkers to design and develop high-quality, user-friendly systems.",
            "Participating in system reviews and providing valuable insights to support project development.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    }
];

export const projects = [
    {
        iconUrl: dts,
        theme: 'btn-back-red',
        name: 'Document Tracking System (DTS)',
        description: 'Built a Laravel-based document tracking system for monitoring incoming and outgoing records, improving document visibility, routing, and office workflow efficiency.',
        link: '#',
    },
    {
        iconUrl: aims,
        theme: 'btn-back-green',
        name: 'Audit Information Management System (AIMS)',
        description: 'Developed an information management system for organizing audit-related records, streamlining report preparation, data retrieval, and administrative tracking.',
        link: '#',
    },
    {
        iconUrl: pickleball,
        theme: 'btn-back-blue',
        name: 'Pickle Ball Booking System',
        description: 'Created a booking platform for managing pickleball court reservations, schedules, user requests, and availability in a simple web-based experience.',
        link: '#',
    },
    {
        iconUrl: wagewise,
        theme: 'btn-back-pink',
        name: 'WageWisePH (Mobile Application)',
        description: 'Designed and developed a Flutter mobile application focused on wage-related guidance, helping users access labor information through a clean and accessible mobile interface.',
        link: '#',
    }
];
