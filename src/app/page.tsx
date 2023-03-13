import Image from "next/image";
import headshot from "../../public/headshot.jpg";

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
            className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-zinc-700 dark:outline-zinc-500"
          />
        </div>

        {/* Right side w/ words */}
        <div>
          <div className="text-zinc-700 dark:text-zinc-500 text-xl">
            Hello! My name is:
          </div>
          <div className="text-5xl uppercase pb-4 flex-col sm:flex-row">
            Braden
            <span className="font-serif text-blue-600">
              &nbsp;Hirschi
            </span>
          </div>
          <div className="text-lg">
            I&apos;m a passionate engineer and creative thinker working as a front-end web developer. I enjoy
            building websites and web apps using modern tools like Angular, Node.js, and Express.js. As a software developer, I&apos;ve learned
            the importance of working with a team, following industry standards/best practices for code
            organization, and conducting thorough research to solve complex problems.
          </div>
          <div className="flex flex-row pt-6 gap-2 text-lg">
            <a href="https://www.linkedin.com/in/braden-hirschi/"
              className="py-2 px-4 border-2 border-blue-500 rounded-full">
              Connect on LinkedIn
            </a>
            <a href="https://mobile.twitter.com/bradenhirschi29" className="py-2 px-4 border-2 border-zinc-700 dark:border-zinc-500 rounded-full">
              Follow me on Twitter
            </a>
            <a href="https://github.com/bradenhirschi29" className="py-2 px-4 border-2 border-zinc-500 dark:border-white rounded-full">
              View my GitHub
            </a>
          </div>
        </div>

      </section>

      {/* GitHub contributions section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-zinc-200 dark:bg-zinc-800">
        <div className="text-5xl uppercase pb-4">
          My GitHub Contributions
        </div>

        <a href="https://github.com/bradenhirschi29">
          <img src="https://ghchart.rshah.org/3B82F6/bradenhirschi29" alt="bradenhirschi29's GitHub contributions chart" />
        </a>
      </section>

    </main>
  )
}