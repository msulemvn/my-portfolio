import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Science",
    location: "National University of Sciences and Technology (NUST), Islamabad",
    description:
      "Graduated with a Bachelor of Sciences degree in Computer Science, building a strong foundation in software development and computer systems.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2018 - Jun 2023",
  },
  {
    title: "Associate Software Engineer",
    location: "Sysvoy International, Lahore",
    description:
      "Worked on a merchandise automation platform for a German client using Symfony, React and API Platform. Developed ChatGPT integration and ComfyUI-based image generation pipeline. Implemented image compression/resizing solutions for Amazon quality requirements.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - Feb 2025",
  },
  {
    title: "Full Stack Developer",
    location: "Briskbase | Gojra (Remote)",
    description:
      "Delivered full-stack solutions and optimized core POS and delivery systems. Developed POS features including printer integration, customer display, and real-time event dispatching via Pusher. Implemented permission-management CRUD with dynamic access control using Passport. Optimized performance with local caching and query indexing.",
    icon: React.createElement(FaReact),
    date: "Jun 2025 - Sep 2025",
  },
  {
    title: "Junior Laravel Developer",
    location: "Hybrid Media Works, Islamabad",
    description:
      "Currently developing and maintaining multiple Laravel-based applications. Built blog CRUD and migrated it to Filament. Redesigned attendance management system with Metronic theme and integrated Stripe payments. Integrated Tipalti API for affiliate payments and executed marketing campaigns using Customer.io and Twilio. Building a third-party logistics & warehousing platform with 1500+ connector integrations.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Laravel",
  "React",
  "Vue.js",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Symfony",
  "Next.js",
  "Filament",
  "HTML",
  "CSS",
  "Tailwind",
  "API Platform",
  "Node.js",
  "Express",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Git",
  "Pusher",
  "Passport",
  "Stripe",
  "RESTful APIs",
  "Webhooks",
  "ChatGPT Integration",
  "Customer.io",
  "Twilio",
  "ComfyUI",
  "Metronic",
] as const;
