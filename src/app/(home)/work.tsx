import Image from "next/image";
import Link from "next/link";
import amyHirschiCoaching from "@/public/amy-hirschi-coaching.png";
import jacobHughesMusic from "@/public/jacob-hughes-music.png";
import gdStyles from "@/public/gd-styles.png";
import kbhCreative from "@/public/kbh-creative.png";
import fireDaily from "@/public/fire-daily.png";
import vstServices from "@/public/vst-services.png";

const Work = () => {
  return (
    <section className="h-screen min-h-screen snap-center flex flex-col justify-center bg-background-secondary px-4 md:px-8 lg:px-24 py-4">
      <h2 className="mb-8">My work</h2>
      <div className="grid gap-2 md:gap-8 grid-cols-2 md:grid-cols-3">
        <Link className="work-card" href="https://www.amyhirschicoaching.com">
          <h5 className="card-title">Amy Hirschi Coaching</h5>
          <Image
            src={amyHirschiCoaching}
            alt={"Screenshot of amyhirschicoaching.com"}
            className="rounded-md"
          />
        </Link>
        <Link
          className="work-card"
          href="https://jacob-hughes-music.vercel.app"
        >
          <h5 className="card-title">Jacob Hughes Music</h5>
          <Image
            src={jacobHughesMusic}
            alt={"Screenshot of jacobhughesmusic.com"}
            className="rounded-md"
          />
        </Link>
        <Link className="work-card" href="https://kbh-creative.vercel.app">
          <h5 className="card-title">KBH Creative</h5>
          <Image
            src={kbhCreative}
            alt={
              "Screenshot of the website for my content writing studio KBH Creative"
            }
            className="rounded-md"
          />
        </Link>
        <Link className="work-card" href="https://firedailynews.vercel.app">
          <h5 className="card-title">Fire Daily News</h5>
          <Image
            src={fireDaily}
            alt={
              "Screenshot of the website for my AI-written news website Fire Daily News"
            }
            className="rounded-md"
          />
        </Link>
        <Link className="work-card" href="https://gdstyles.vercel.app">
          <h5 className="card-title">GD Styles Chrome Extension</h5>
          <Image
            src={gdStyles}
            alt={"Screenshot of my GD Styles chrome store extension website"}
            className="rounded-md"
          />
        </Link>
        <Link className="work-card " href="https://vstservices.com">
          <h5 className="card-title">VST Services</h5>
          <Image
            src={vstServices}
            alt={"Screenshot of vstservices.com"}
            className="rounded-md"
          />
        </Link>
      </div>
    </section>
  );
};

export default Work;
