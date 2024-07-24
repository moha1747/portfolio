import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: {
    template: "%s - Abbaas Mohamud",
    default: "Abbaas Mohamud - Computer Science student",
  },
  description:
    "Portfolio and personal website of Abbaas Mohamud, a Computer Science student at the University of Minnesota.",
};

import { DefaultAppShell } from "@/components/appshell";
import MantineCustomProvider from "@/app/mantine-custom-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth selection:bg-green-300 selection:text-green-900"
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <NextTopLoader color="#22c55e" showSpinner={false} />

        <MantineCustomProvider>
          <Notifications position="top-right" zIndex={1000} autoClose={10000} />

          <DefaultAppShell>{children}</DefaultAppShell>
        </MantineCustomProvider>
      </body>
    </html>
  );
}
