import Image from "next/image";
import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconFileDescription
} from "@tabler/icons-react";
import { Highlight, } from "@/components/hero-highlight";
import { Meteors } from "@/components/meteors";
import { Container } from "@/components/container";
import { PortfolioCard } from "@/components/portfolio";

import pfp1 from "@/assets/images/pfp1.png";
import umn from "@/assets/images/work/umn.png";


import { portfolioData } from "@/data/portfolio";
import { workData, monthNames } from "@/data/work";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <Container>
        <div className="relative grid h-full min-h-[40rem] gap-4 overflow-clip py-4 lg:grid-cols-5">
          <Meteors number={10} />
          <div className="flex flex-col justify-center lg:col-span-3">
            <h2 className="text-xl font-bold leading-none lg:text-2xl">
              Hello &#x1F44B;,
            </h2>
            <h2 className="mb-12 text-xl font-bold lg:text-2xl">
              My name is Abbaas Mohamud
            </h2>
            <h1 className="mb-16 text-xl font-bold lg:text-3xl">
              I&apos;m an{" "}
              <Highlight>
                <span className="lg:px-4">Aspring Software Engineer</span>
              </Highlight>
            </h1>
            <h2 className="mb-4 text-xl font-semibold lg:text-2xl">
              Specializing in Python, Java, JavaScript, and MySQL.
            </h2>
            <p className="text-sm lg:text-base">
              I&apos;m a currently attending the University of Minnesota.
              I&apos;ve been creating system-based web applications using Java
              with Spring Boot, JavaScript with React and MySQL.
            </p>
            {/* socials  */}
            <div className="mt-12 flex items-center space-x-8">
              <Link
                href={"https://www.linkedin.com/in/abbaas1/"}
                target="_blank"
              >
                {/* edit the icon so that it resize bigger and glow when hoverring */}
                <IconBrandLinkedin
                  size={50}
                  className="duration-200 hover:scale-150 hover:text-green-500"
                />
                <p>LinkedIn</p>
              </Link>
              <Link href={"https://github.com/moha1747"} target="_blank">
                <IconBrandGithub
                  size={50}
                  className="duration-200 hover:scale-150 hover:text-green-500"
                />
                <p>Github</p>
              </Link>
              <Link href={""} target="_blank">
                <IconFileDescription
                  size={50}
                  className="duration-200 hover:scale-150 hover:text-green-500"
                />
                <p>Resume</p>
              </Link>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center lg:col-span-2 lg:mt-0">
            <div className="w-80 overflow-clip rounded-lg border-4 border-green-500 lg:w-96">
              <Image
                src={pfp1.src}
                alt="Abbaas' Profile Picture"
                width={200}
                height={200}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
      {/* Education */}

      {/* work experience */}
      <Container className="space-y-12 overflow-hidden rounded-lg border-2 border-[#eaeaea] bg-zinc-50 p-4 dark:border dark:border-neutral-600 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold lg:text-4xl">Education</h2>

        <div className="flex">
          <div className="flex h-[250px] w-[250px] flex-shrink-0 items-center justify-center overflow-clip rounded-lg">
            <div className="absolute flex h-[250px] w-[250px] flex-shrink-0 items-center justify-center overflow-clip rounded-lg">
              <Image
                src={umn}
                alt="Univeristy of Minnesota Logo"
                width={400}
                height={400}
                className="w-full flex-shrink-0 object-cover"
              />
            </div>
          </div>
          <div>
            <div className="mb-[10px] mt-[50px] flex items-center justify-center text-3xl font-bold leading-tight">
              <h1>University of Minnesota</h1>
            </div>
            <p className="text-md font-medium">Bachelor of Arts in Computer Science</p>
            <p>Sep 2022 - May 2026</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold lg:text-4xl">Work Experience</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {workData.slice(0, 4).map((work) => (
            <div key={work.companyName} className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-clip rounded-lg bg-white">
                  <Image
                    src={work.companyLogo}
                    alt={`${work.companyName} Logo`}
                    width={200}
                    height={200}
                    className="w-full flex-shrink-0 object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold leading-tight">
                    {work.companyName}
                  </h3>
                  <p className="text-sm">{work.jobTitle}</p>
                </div>
              </div>
              <p className="text-sm">
                {monthNames[work.monthStart]} {work.yearStart} -{" "}
                {work.yearEnd
                  ? (work.monthEnd ? monthNames[work.monthEnd] + " " : "") +
                    work.yearEnd
                  : "Present"}
              </p>
            </div>
          ))}
        </div>
        {/* go to linkedin button */}
        <Link
          href={"https://www.linkedin.com/in/abbaas1/"}
          target="_blank"
          rel="noopener"
          className="flex w-full items-center justify-center rounded-lg border border-green-500 p-4 font-semibold text-green-500 duration-200 hover:bg-green-500 hover:text-black hover:underline"
        >
          Go to LinkedIn &rarr;
        </Link>
      </Container>
      {/* Latest portfolio */}
      <Container className="space-y-12 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold lg:text-4xl">Latest Portfolio</h2>
          <Link
            href="/portfolio"
            className="flex-shrink-0 text-sm font-semibold text-green-500 hover:underline"
          >
            View all portfolio &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.slice(0, 4).map((portfolio) => (
            <PortfolioCard
              key={portfolio.title}
              portfolio={portfolio}
              className="min-h-[30rem]"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
