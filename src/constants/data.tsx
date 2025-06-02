import { Project } from "@/types";

export const collageData = {
  collage: "Silver Oak University",
  degree: "Bachelor of Technology in Information Technology",
  degreeShort: "B.Tech Information Technology",
  startDate: "June 2022",
  endDate: "June 2026",
} as const;

export const schoolData = [
  {
    school: "Ankur High School",
    degree: "Higher Secondary School Certificate",
    startDate: "",
    endDate: "",
  },
  {
    school: "Ankur High School",
    degree: "Secondary School Certificate",
    startDate: "June 2010",
    endDate: "June 2022",
  },
] as const;

export const skillBasedEducationData = [
  {
    title: "MERN Stack Web Development Bootcamp by Angela Yu",
    startDate: "April 2023",
    endDate: "Present",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    startDate: "April 2023",
    endDate: "Present",
  },
] as const;

export const experienceData = [
  {
    company: "Devstree IT Services",
    role: "Jr Software Developer",
    startDate: "April 2022",
    endDate: "Present",
    subRoles: [
      {
        role: "Junior Software Developer",
        skills: [
          "Next JS",
          "React Js",
          "Typescript",
          "Ant Design",
          "Material Ui",
          "Tailwind Css",
        ],
        startDate: "July 2023",
        endDate: "Present",
        duration: "8 Months", //TODO: MAke this dynamic later
        description:
          "Actively engaged in contributing to //large-scale live projects// , where I focus on implementing Clean Code principles to ensure the robustness and maintainability of the software  dedicated to achieving client satisfaction by translating project requirements into efficient and effective code solutions",
      },
      {
        role: "React / Ionic Trainee",
        skills: ["Ionic Framework", "React Js", "Javascript", "Bootstrap"],
        startDate: "April 2023",
        endDate: "June 2023",
        duration: "3 Months", //TODO: MAke this dynamic later
        description: "Training in Ionic and React building practice projects",
      },
      {},
    ],
  },
  {
    company: "Viji Foods",
    role: "Team Lead Customer Service",
    startDate: "Jan 2022",
    endDate: "Nav 2022",
    duration: "11 Months",
  },
] as const;

export const line =
  "01001001 00100000 01100011 01100001 01101110 00100000 01100011 01100101 01101110 01110100 01100101 01110010 00100000 01100001 00100000 01100100 01101001 01110110";

export const ProjectsData: Project[] = [
  {
    title: "Super Advance Enterprise management system",
    des: "Fully dynamic enterprise management software suitable for all types of industries for managing thier workflow and tasks, dynamic roles and access, dynamic form builder, offline mode, video chat remote assist and much more",
    tech: [
      "React JS",
      "Video Sdk",
      "PWA",
      "Tanstack Query",
      "Tanstack Router",
      "Zustand",
      "Shadcn UI",
    ],
    status: "In Progress",
    customClass: "col-span-2",
  },
  {
    title: "Landing Page and Admin with Payload CMS",
    des: "Full Stack Dynamic Content Management System built using payload cms, postgres, drizzle orm, advance cacheing for best performance in landing page",
    tech: ["Payloadcms", "Postgres", "Drizzle Orm", "Tailwind CSS"],
    status: "Completed",
  },
  {
    title: "AL Based Grading and LMS Web App",
    des: `AI-powered LMS web application capable of analyzing question papers, memos, and students’ handwritten
answer sheets to provide automated grading and personalized feedback. The platform also generates quizzes
tailored to individual students’ weaknesses for targeted learning improvement.quizes based on the weekness of
the student`,
    tech: ["React JS", "Tanstack Query", "Zustand", "Shadcn UI"],
    status: "Completed",
    customClass: "col-span-2",
  },
  {
    title: "AI 3D Talking Avatar Chat  Bot",
    des: "A 3D Avatar Chat Bot that can speak the chat output with lip sink",
    tech: ["Three JS", "Next JS", "Azure Speech API", "Tailwind", "Shadcn"],
    status: "Completed",
  },
  {
    title: "Dynamic Life Journey Manager for Ageing!",
    des: "All your information, contacts, schedules, expenses and memories, Monitor, track, store, solve, delegate, coordinate, schedule, remind",
    tech: ["Next Js", "In House custom component library"],
    status: "Completed",
  },
  {
    title: "SAAS For Garange Owners",
    des: "An All in One saas for Garange owners",
    tech: ["MUI", "React JS"],
    status: "Completed",
  },
  {
    title: "Kitty Kit",
    des: "A Frontend Toolkit for all the frontend developers needs",
    tech: ["Next JS", "Shadcn", "Tailwind"],
    status: "In Progress",
    href: "https://kitty-kit.vercel.app/",
  },
  // {
  //   title: "Smart Donkey",
  //   des: "An Educational Platform for learning new life skills like finance, self defence , etc",
  //   tech: ["Next JS", "Shadcn", "Tailwind"],
  //   status: "On Hold",
  // },
  {
    title: "Car Import Export Portal",
    des: "Landing Page, SAAS and Admin Panel for Car Import Export Business",
    tech: ["Next JS", "Ant Design", "Redux"],
    status: "Completed",
  },
  {
    title: "SAAS For Garange Owners",
    des: "An All in One saas for Garange owners",
    tech: ["MUI", "React JS"],
    status: "Completed",
  },
  {
    title: "Appointment Booking Portal",
    des: "A web app for booking car service appontments",
    tech: ["Next JS", "MUI", "Tailwind"],
    status: "Completed",
  },
  {
    title: "Admin Panel",
    des: "An Admin Panel for managing the car service apps",
    tech: ["Crema Admin Panel Theme", "Ant design", "React JS"],
    status: "Completed",
  },
] as const;
