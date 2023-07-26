"use client";

import Image from "next/image";
import { useState } from "react";
import headshotGrayBlue from "../../../public/headshot-gray-blue.webp";
import headshotGreenTan from "../../../public/headshot-green-tan.webp";
import headshotNavyYellow from "../../../public/headshot-navy-yellow.webp";
import Github from "./github";
import Portfolio from "./portfolio";
import ThemeSelect from "./theme-select";

export default function Home() {
  const [theme, setTheme] = useState({
    name: "gray-blue",
    text: "#ffffff",
    primary: "#3B82F6",
    secondary: "#71717a",
    backgroundPrimary: "#18181b",
    backgroundSecondary: "#27272a",
  });

  return (
    <main>
      {/* Hero section */}
      <section className="min-h-screen px-8 md:px-16 lg:px-40 flex flex-col md:flex-row items-center justify-center lg:gap-16">
        {/* Left side w/ picture */}
        <div className="relative m-8">
          {theme.name === "gray-blue" && (
            <Image
              src={headshotGrayBlue}
              alt="headshot"
              className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-secondary"
            />
          )}
          {theme.name === "green-tan" && (
            <Image
              src={headshotGreenTan}
              alt="headshot"
              className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-secondary"
            />
          )}
          {theme.name === "navy-yellow" && (
            <Image
              src={headshotNavyYellow}
              alt="headshot"
              className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-secondary"
            />
          )}
        </div>

        {/* Right side w/ words */}
        <div>
          <h3 className="text-secondary text-xl">Hello! My name is:</h3>
          <h1 className="pb-4 flex-col sm:flex-row">
            Braden
            <span className="text-primary font-serif">&nbsp;Hirschi</span>
          </h1>
          <p className="text-lg">
            I&apos;m a passionate front-end engineer. I enjoy building websites
            and web apps using React and Next.js. As a software developer,
            I&apos;ve learned the importance of working with a team, following
            industry standards and best practices for writing code, and
            conducting thorough research to solve complex problems.
          </p>
          <div className="flex flex-row pt-6 gap-2 text-lg">
            <a
              href="https://www.linkedin.com/in/braden-hirschi/"
              className="py-2 px-4 border-2 border-primary rounded-full"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/bradenhirschi29"
              className="py-2 px-4 border-2 border-secondary rounded-full"
            >
              View my GitHub
            </a>
          </div>
        </div>
      </section>

      <Portfolio />

      <Github theme={theme} />

      <ThemeSelect setTheme={setTheme} />
    </main>
  );
}
