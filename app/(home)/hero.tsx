import Image from "next/image";
import headshot from "../../public/headshot.webp";
import localFont from "next/font/local";

const doomLeftFont = localFont({ src: "../../public/AmazDooMLeft.ttf" });
const doomRightFont = localFont({ src: "../../public/AmazDooMRight.ttf" });

const Hero = ({ theme }: { theme: any }) => {
  return (
    <section className="h-screen min-h-screen snap-start px-4 md:px-16 lg:px-40 py-8 flex flex-col lg:flex-row items-center justify-center lg:gap-16">
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

        {theme.name === "doom-mode" ? (
          <div className="text-[100px]">
            <span className={doomLeftFont.className + " uppercase"}>
              Braden
            </span>
            <span className={doomRightFont.className + " uppercase"}>
              &nbsp;Hirschi
            </span>
          </div>
        ) : (
          <h1 className="pb-4 flex-row">
            Braden
            <span className="text-primary font-serif">&nbsp;Hirschi</span>
          </h1>
        )}

        <p className="text-lg">
          I&apos;m a passionate full-stack software engineer with a knack for
          creating dynamic digital experiences. I pride myself on my ability to
          seamlessly integrate elegant front-end experiences with smooth and
          robust back-end functionality. Keep scrolling to see some of my work!
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
};

export default Hero;
