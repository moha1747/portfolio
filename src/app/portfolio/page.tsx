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
      </section>

      <PortfolioList portfolioData={portfolioData} />
    </Container>
  );
}
