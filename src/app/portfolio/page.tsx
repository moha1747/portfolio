import { Metadata } from "next";

import { PortfolioList } from "@/components/portfolio";
import { Container } from "@/components/container";

import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Abbaas Mohamud",
};

export default function Portfolio() {
  return (
    <Container>
      <section className="mb-12">
        <h2 className="mb-4 text-5xl font-bold">Portfolio</h2>
        <p>
          Here are some of my works. I have worked on various projects, from a
          student productivity platform to a Algorithm visualizer game. I have programming experience in JavaScript, Python, Java, SQL. I have experience with frameworks such as React, Spring Boot and MySQL. 
        </p>
      </section>

      <PortfolioList portfolioData={portfolioData} />
    </Container>
  );
}
