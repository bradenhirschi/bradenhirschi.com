import Image from "next/image";
import Link from "next/link";
import amyHirschiCoaching from "../../public/amy-hirschi-coaching.png";
import jacobHughesMusic from "../../public/jacob-hughes-music.png";
import gdStyles from "../../public/gd-styles.png";
import kbhCreative from "../../public/kbh-creative.png";
import fireDaily from "../../public/fire-daily.png";
import vstServices from "../../public/vst-services.png";

// TODO fix responsiveness on this page. implement a side scroll thing to see all projects

const Work = () => {
  return (
    <section className="h-[200vh] min-h-[200vh] md:h-screen md:min-h-screen md:snap-center flex flex-col justify-center bg-background-secondary px-4 md:px-8 lg:px-24 py-4">
      {/* Scroll snap point for mobile devices */}
      <div className="snap-start md-snap-none md:hidden" />
      <h1 className="mb-8">My work</h1>
      <div className="flex flex-col md:grid gap-8 grid-cols-3">
        <Link className="card " href="https://www.amyhirschicoaching.com">
          <h5 className="card-title">Amy Hirschi Coaching</h5>
          <Image
            src={amyHirschiCoaching}
            alt={"Screenshot of amyhirschicoaching.com"}
            className="rounded-md"
          />
        </Link>
        <Link className="card" href="https://jacob-hughes-music.vercel.app">
          <h5 className="card-title">Jacob Hughes Music</h5>
          <Image
            src={jacobHughesMusic}
            alt={"Screenshot of jacobhughesmusic.com"}
            className="rounded-md"
          />
        </Link>
        <Link className="card" href="https://www.kbh-creative.com">
          <h5 className="card-title">KBH Creative</h5>
          <Image
            src={kbhCreative}
            alt={
              "Screenshot of the website for my content writing studio KBH Creative"
            }
            className="rounded-md"
          />
        </Link>
        {/* Scroll snap point for mobile devices */}
        <div className="snap-start md-snap-none col-span-0 md:hidden" />
        <Link className="card" href="https://www.firedailynews.com">
          <h5 className="card-title">Fire Daily</h5>
          <Image
            src={fireDaily}
            alt={
              "Screenshot of the website for my AI-written news website Fire Daily News"
            }
            className="rounded-md"
          />
        </Link>
        <Link className="card " href="https://gdstyles.vercel.app/">
          <h5 className="card-title">GD Styles Chrome Extension</h5>
          <Image
            src={gdStyles}
            alt={"Screenshot of my GD Styles chrome store extension website"}
            className="rounded-md"
          />
        </Link>
        <Link className="card " href="https://vstservices.com/">
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
