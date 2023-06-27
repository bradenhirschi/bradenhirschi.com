import Image from "next/image";
import headshot from "../../public/headshot.jpg";
import Github from "./github";
import Portfolio from "./portfolio";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="min-h-screen px-8 md:px-16 lg:px-40 flex flex-col md:flex-row items-center justify-center lg:gap-16">
        {/* Left side w/ picture */}
        <div className="relative m-8">
          <Image
            src={headshot}
            alt="headshot"
            className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-zinc-500"
            priority
          />
        </div>

        {/* Right side w/ words */}
        <div>
          <h3 className="text-zinc-700 dark:text-zinc-500 text-xl">
            Hello! My name is:
          </h3>
          <h1 className="pb-4 flex-col sm:flex-row">
            John
            <span className="font-serif text-blue-600">&nbsp;Wayne</span>
          </h1>
          <p className="text-lg">
            I&apos;m a passionate front-end engineer. I enjoy building websites
            and web apps using React and Next.js.
            As a software developer, I&apos;ve learned the importance of working
            with a team, following industry standards and best practices for
            writing code, and conducting thorough research to solve complex
            problems.
          </p>
          <div className="flex flex-row pt-6 gap-2 text-lg">
            <a
              href="https://www.linkedin.com/in/braden-hirschi/"
              className="py-2 px-4 border-2 border-blue-500 rounded-full"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/bradenhirschi29"
              className="py-2 px-4 border-2 border-zinc-500 dark:border-white rounded-full"
            >
              View my GitHub
            </a>
          </div>
        </div>
      </section>

      <Portfolio />

      <Github />
    </main>
  );
}
