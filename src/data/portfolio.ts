export type PortfolioType = {
  url?: string;
  urlMissingReason?: string;
  year: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

import omnistudy from "@/assets/images/portfolio/omnistudy.png"
import hackathon from "@/assets/images/portfolio/hackathon.png"
import game from "@/assets/images/portfolio/game.gif";
import main from "@/assets/images/portfolio/main.png";
import chat from "@/assets/images/portfolio/chat.png";
import quote from "@/assets/images/portfolio/Quote.png";
import banking from "@/assets/images/banking.png"
import nextjs from "@/assets/images/portfolio/nextjs.png"






export const portfolioData: PortfolioType[] = [
  {
    url: "https://electro9-nextjs-cms.vercel.app",
    year: 2023,
    title: "CRM dashboard built with Next.JS",
    description:
      "CRM dashboard that allows users to enjoy a flexible and intuitive interface that adapts to their unique workflow",
    image: nextjs.src,
    tags: ["JavaScript", "React", "Next.JS", "Node.JS", "MUI"],
  },
  {
    url: "https://omnistudy-test.firebaseapp.com",
    year: 2024,
    title: "OmniStudy",
    description:
      "Student productivity app built while I was a Google Developer Student",
    image: omnistudy.src,
    tags: [
      "TypeScript",
      "Python",
      "React",
      "Firebase",
      "Google Cloud Platform",
    ],
  },
  {
    url: "https://github.com/moha1747/Banking-System",
    year: 2024,
    title: "Banking System",
    description: "Banking sytem created using Java, Tomcat and CSS",
    image: banking.src,
    tags: ["Java", "Servelets", "Tomcat", "HTML/CSS"],
  },

  // {
  //   urlMissingReason: "Internal Use Only (In deployment)",
  //   year: 2024,
  //   title: "Graph Algorithm Game",
  //   description:
  //     "A game that lets you see which Graph Algorithm reaches the goal the fastest",
  //   image: game.src,
  //   tags: ["JavaScript", "React", "Tailwind", "Data Structures & Algorithms"],
  // },

  {
    url: "https://github.com/moha1747/Employee-Management-System",
    year: 2024,
    title: "Employee Management System",
    description: "A Crud implentation of an Employee Management System",
    image: main.src,
    tags: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "React",
      "MySQL",
      "Material-UI",
      "AWS: S3, EC2, RDS",
    ],
  },
  {
    url: "https://diversity-in-tech-workplace.vercel.app/",
    year: 2024,
    title: "MLH DataFest Hackathon",
    description:
      "Data processing pipeline for the DataFest Hackathon, by organizing diversity data for tech companies",
    image: hackathon.src,
    tags: ["Python", "Pandas", "JavaScript", "React", "MUI"],
  },

  // {
  //   urlMissingReason: "Internal Use Only (In deployment)",
  //   year: 2024,
  //   title: "Real-Time Chat App",
  //   description:
  //     "A web app that allows you to communicate with other users in real time",
  //   image: chat.src,
  //   tags: ["PHP", "JavaScript", "AJAX", "MySQL", "CSS"],
  // },
];