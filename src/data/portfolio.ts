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






export const portfolioData: PortfolioType[] = [
  {
    url: "https://omnistudy-test.firebaseapp.com",
    year: 2024,
    title: "OmniStudy",
    description:
      "Discover personalized companions, adaptive schedules, and real-time feedback for an unparalleled learning experience.",
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
    url: "https://diversity-in-tech-workplace.vercel.app/",
    year: 2024,
    title: "MLH DataFest Hackathon",
    description:
      "Data processing pipeline for the DataFest Hackathon, by organizing diversity data for tech companies",
    image: hackathon.src,
    tags: ["Python", "Pandas", "JavaScript", "React", "Material UI"],
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
    urlMissingReason: "Internal Use Only (In deployment)",
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
  // {
  //   urlMissingReason: "Quote Api no longer working",
  //   year: 2024,
  //   title: "Quote of the day",
  //   description:
  //     "A web app that generates a random quote or based on key words used through search feature",
  //   image: quote.src,
  //   tags: ["JavaScript", "Node.JS", "React", "Tailwind",],
  // },
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