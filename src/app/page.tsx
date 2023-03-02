import Image from "next/image";
import headshot from "../../public/headshot.png";

export default function Home() {
  return (
    <main className="dark:bg-background-900 dark:text-white">
      <div className="flex flex-col min-h-screen">

        {/* Empty top section */}
        <div className="w-full h-[140px] px-12 pt-6"></div>

        <div>
          {/* Hero section */}
          <div className="py-12 px-40 h-full w-full flex flex-col lg:flex-row lg:gap-16">

            {/* Left side w/ picture */}
            <div className="relative">
              <Image
                src={headshot}
                alt="headshot"
                className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-background-500" 
              />
            </div>

            {/* Right side w/ words */}
            <div>
              <div className="text-background-500 text-xl">
                Hello! My name is:
              </div>
              <div className="text-5xl uppercase pb-4">
                Braden
                <span className="font-serif text-blue-600">
                  &nbsp;Hirschi
                </span>
              </div>
              <div className="text-lg">
                I&apos;m a passionate engineer and creative thinker working as a front-end web developer. I enjoy
                building websites and web apps using Angular, Node.js, and Express.js. As a software developer, I&apos;ve learned
                the importance of working with a team, following industry standards and best practices for code
                organization, and conducting thorough research to solve complex problems. I&apos;m currently redesigning this
                website as a portfolio, so check back in soon to see some of my work.
              </div>
              <div className="flex flex-row pt-6 gap-2 text-lg">
                <a href="https://www.linkedin.com/in/braden-hirschi/"
                  className="py-2 px-4 border-2 border-blue-500 rounded-full">
                  Connect on LinkedIn
                </a>
                <a href="https://mobile.twitter.com/bradenhirschi29" className="py-2 px-4 border-2 border-white rounded-full">
                  Connect on Twitter
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}