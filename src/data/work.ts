export type WorkType = {
  yearStart: number;
  monthStart: number;
  yearEnd?: number;
  monthEnd?: number;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
};

import codePath from "@/assets/images/work/CodePath.jpg";
import UMN from "@/assets/images/work/umn-cse.webp";
import gdsc from "@/assets/images/work/gdsc-logo.png";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// NOTES: month is 0-based index, 0 = January, 11 = December
export const workData: WorkType[] = [
  {
    yearStart: 2024,
    monthStart: 6,
    companyName: "CodePath",
    companyLogo: codePath.src,
    jobTitle: "FullStack Tech Fellow",
  },
  {
    yearStart: 2024,
    monthStart: 6,
    companyName: "University of Minnesota",
    companyLogo: UMN.src,
    jobTitle: "Computer Science Teaching Assistant",
  },
  {
    yearStart: 2023,
    monthStart: 9,
    yearEnd: 2024,
    monthEnd: 5,
    companyName: "Google Developer Student Club",
    companyLogo: gdsc.src,
    jobTitle: "Software Engineer",
  },
  {
    yearStart: 2023,
    monthStart: 8,
    yearEnd: 2023,
    monthEnd: 11,
    companyName: "CodePath",
    companyLogo: codePath.src,
    jobTitle: "Web Developer Tech Fellow",
  },
  
];
