import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  canva,
  order,
  nasa,
  tour,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Front-End Development",
    // company_name: "Starbucks",
    // icon: starbucks,
    iconBg: "#383E56",
    // date: "1 Year exprerience",
    points: [
      "React (Basic)",
      "Next Js (Basic)",
      "JavaScript (Intermediate)",
      "HTML (Intermediate)",
      "CSS (Basic)",
      "Tailwind CSS (Basic)",
    ],
  },
  {
    title: "Back-End Development",
    // company_name: "Tesla",
    // icon: tesla,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: ["Java (Basic)", "Nodejs (Basic)", "Spring Boot (Basic)"],
  },
  {
    title: "Database Management",
    // company_name: "Shopify",
    // icon: shopify,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: ["Mongo DB", "SQL", "MySQL", "Oracle SQL"],
  },
  {
    title: "Web Hosting",
    // company_name: "Meta",
    // icon: meta,
    iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    points: ["Netify", "Vercel", "Fire Base"],
  },
];

const testimonials = [
  {
    testimonial: "Garbage Management Mobile Application",
    name: "React Native",
    designation: "Group Project",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Programming Assistant Tool Web Application",
    name: "MERN Stack",
    designation: "Group Project",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Blog App",
    name: "React Native",
    designation: "Individual Project",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Order Management System (Individual)",
    description:
      "Web-based platform that allows users to manage orders, track order status, and view order history.",
    tags: [
      {
        name: "Noxtjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: order,
    source_code_link:
      "https://github.com/SandunJay/edu-platform-backend/tree/dev-test/order-service",
  },
  {
    name: "Nasa API Based Web Application",
    description:
      "Using Nasas API to get the data and display it in a user-friendly way. The user can search for images and videos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss / Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase auth",
        color: "blue-text-gradient",
      },
    ],
    image: nasa,
    source_code_link: "https://github.com/SabaragamuwaSATD/NasaAPI",
  },
  {
    name: "Tourism & Travel Management System",
    description:
      "Web-based platform that allows users to manage tours, track tour status, and view tour history. This is a group project. I was responsible for the Back-end development.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
    ],
    image: tour,
    source_code_link:
      "https://github.com/SabaragamuwaSATD/Tourism-Travel-Management-System/tree/master",
  },
];

export { services, technologies, experiences, testimonials, projects };
