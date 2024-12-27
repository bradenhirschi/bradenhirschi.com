import Image from "next/image";
import headshot from "@/public/headshot.webp";
import { useTheme } from "../theme-context";
import NameText from "./name-text";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section
      className="h-screen min-h-screen snap-start px-4 md:px-16 lg:px-40 py-8 flex flex-col lg:flex-row items-center justify-center lg:gap-16"
      style={{
        backgroundImage:
          theme.backgroundImage && `url("${theme.backgroundImage}")`,
      }}
    >
      {/* Left side w/ picture */}
      <div className="relative m-2 md:m-s8">
        <Image
          priority
          loading="eager"
          src={headshot}
          alt="headshot"
          className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-secondary bg-primary"
        />
      </div>

      {/* Right side w/ words */}
      <div>
        <h3 className="text-secondary text-xl">Hello! My name is</h3>
        <NameText />
        <p className="text-xl">
          I&apos;m a passionate full-stack software engineer and designer with a
          passion for creating dynamic experiences - whether digitally or
          otherwise. Keep scrolling to see some of my work!
        </p>
        <div className="flex flex-row pt-6 gap-2 text-lg">
          <a
            href="https://www.linkedin.com/in/braden-hirschi/"
            className="py-2 px-4 border-2 border-primary rounded-full flex flex-row hover:bg-primary/30"
          >
            <span className="hidden sm:block">Connect on&nbsp;</span>LinkedIn
          </a>
          <a
            href="https://github.com/bradenhirschi"
            className="py-2 px-4 border-2 border-secondary rounded-full flex flex-row hover:bg-secondary/30"
          >
            <span className="hidden sm:block">View my&nbsp;</span>GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
