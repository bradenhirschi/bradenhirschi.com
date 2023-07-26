import Image from "next/image";
import Link from "next/link";
import amyHirschiCoaching from "../../../public/amy-hirschi-coaching.png";
import stockmarketGame from "../../../public/stockmarket-game.png";

export default function Portfolio() {
  return (
    <section className="grid gap-8 bg-background-secondary md:grid-cols-2 px-8 md:px-16 lg:px-40 py-24">
      <h1>My work</h1>
      <div></div>
      <Link className="card" href="https://amyhirschicoaching-com.vercel.app/">
        <h5 className="mb-4">Amy Hirschi Coaching</h5>
        <Image
          src={amyHirschiCoaching}
          alt={"Screenshot of amyhirschicoaching.com"}
          className="rounded-md"
        />
      </Link>
      <Link className="card" href="https://stockmarket-game-puce.vercel.app/">
        <h5 className="mb-4">
          (In progress) Clone of the 1963 Stock Market Game
        </h5>
        <Image
          src={stockmarketGame}
          alt={"Screenshot of my Stock Market Game project"}
          className="rounded-md"
        />
      </Link>
    </section>
  );
}
