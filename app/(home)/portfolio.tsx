import Image from "next/image";
import Link from "next/link";
import amyHirschiCoaching from "../../public/amy-hirschi-coaching.png";
import jacobHughesMusic from "../../public/jacob-hughes-music.png";
import gdStyles from "../../public/gd-styles.png";
import kbhCreative from "../../public/kbh-creative.png";

export default function Portfolio() {
  return (
    <section className="flex flex-col md:grid gap-8 bg-background-secondary md:grid-cols-3 px-4 md:px-8 lg:px-24 py-24">
      <div className="col-span-3">
        <h1>My work</h1>
      </div>
      <Link className="card" href="https://www.amyhirschicoaching.com">
        <h5 className="mb-4">Amy Hirschi Coaching</h5>
        <Image
          src={amyHirschiCoaching}
          alt={"Screenshot of amyhirschicoaching.com"}
          className="rounded-md"
        />
      </Link>
      <Link className="card" href="https://jacob-hughes-music.vercel.app">
        <h5 className="mb-4">Jacob Hughes Music</h5>
        <Image
          src={jacobHughesMusic}
          alt={"Screenshot of jacobhughesmusic.com"}
          className="rounded-md"
        />
      </Link>
      <Link className="card" href="https://www.kbh-creative.com">
        <h5 className="mb-4">KBH Creative</h5>
        <Image
          src={kbhCreative}
          alt={
            "Screenshot of the website for my content writing studio KBH Creative"
          }
          className="rounded-md"
        />
      </Link>
      <Link className="card" href="https://gdstyles.vercel.app/">
        <h5 className="mb-4">GD Styles Chrome Extension</h5>
        <Image
          src={gdStyles}
          alt={"Screenshot of my GD Styles chrome store extension website"}
          className="rounded-md"
        />
      </Link>
    </section>
  );
}
