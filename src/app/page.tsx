import Image from "next/image";
import headshot from "../../public/headshot.jpg";
import amyHirschiCoaching from "../../public/amy-hirschi-coaching.png";

const codeLinks: { link: string; title: string; description: string }[] = [
  {
    link: "https://github.com/bradenhirschi29/bradenhirschi.com",
    title: "bradenhirschi.com",
    description: "Open source code for this website!",
  },
];

function Github() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-zinc-200 dark:bg-zinc-800">
      <div className="text-5xl uppercase pb-4">My GitHub Contributions</div>
      <a href="https://github.com/bradenhirschi29">
        <Image
          src="https://ghchart.rshah.org/3B82F6/bradenhirschi29"
          alt="bradenhirschi29's GitHub contributions chart"
        />
      </a>

      <div className="w-full my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          {codeLinks.map((codeLink) => (
            <a
              key={JSON.stringify(codeLink)}
              href={codeLink.link}
              target="_blank"
              rel="noreferrer"
              className="card hover:bg-zinc-50 dark:bg-zinc-50/5 dark:hover:bg-zinc-50/10"
            >
              <h1 className="label">{codeLink.title}</h1>
              <h2 className="text-sm font-light secondary-label line-clamp-2">
                {codeLink.description}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="grid gap-8 bg-zinc-100 dark:bg-zinc-800 md:grid-cols-2 px-8 md:px-16 lg:px-40 py-24">
      <h1>
        My work
      </h1>
      <div></div>
      <a className="card" href="http://www.amyhirschicoaching.com">
        <h5 className="mb-4">
          Amy Hirschi Coaching
        </h5>
        <Image src={amyHirschiCoaching} alt={"Screenshot of amyhirschicoaching.com"} className="rounded-md"></Image>
      </a>
      <div className="card">
        <h5>
          Project 2  
        </h5>
      </div>
    </section>
  )
}

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
            Braden
            <span className="font-serif text-blue-600">&nbsp;Hirschi</span>
          </h1>
          <p className="text-lg">
            I&apos;m a passionate front-end engineer. I enjoy building websites
            and web apps using modern tools like React, Node.js, and Express.js.
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
              href="https://mobile.twitter.com/bradenhirschi29"
              className="py-2 px-4 border-2 border-zinc-700 dark:border-zinc-500 rounded-full"
            >
              Follow me on Twitter
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
    </main>
  );
}
