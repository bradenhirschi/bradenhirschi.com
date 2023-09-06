import Image from "next/image";
import Link from "next/link";
import amyHirschiCoaching from "../../public/amy-hirschi-coaching.png";
import gdStyles from "../../public/gd-styles.png";

export default function Portfolio() {
  return (
    <section className="grid gap-8 bg-background-secondary md:grid-cols-2 px-4 md:px-16 lg:px-40 py-24">
      <h1>My work</h1>
      <div></div>
      <Link className="card" href="https://www.amyhirschicoaching.com">
        <h5 className="mb-4">Amy Hirschi Coaching</h5>
        <Image
          src={amyHirschiCoaching}
          alt={"Screenshot of amyhirschicoaching.com"}
          className="rounded-md"
        />
      </Link>
      {/*<Link className="card" href="./gd-styles">*/}
      <Link
        className="card"
        href="https://chrome.google.com/webstore/detail/gd-styles/pjjhmajhdkfcolcpmfgimbgmkonbfnpl"
      >
        <h5 className="mb-4">GD Styles Chrome Extension</h5>
        <Image
          src={gdStyles}
          alt={"Screenshot of my GD Styles chrome store extension listing"}
          className="rounded-md"
        />
      </Link>
    </section>
  );
}
