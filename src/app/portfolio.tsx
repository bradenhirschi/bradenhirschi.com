import Image from "next/image";
import amyHirschiCoaching from "../../public/amy-hirschi-coaching.png";

export default function Portfolio() {
  return (
    <section className="grid gap-8 bg-zinc-100 dark:bg-zinc-800 md:grid-cols-2 px-8 md:px-16 lg:px-40 py-24">
      <h1>
        My work
      </h1>
      <div></div>
      <a className="card" href="https://amyhirschicoaching-com.vercel.app/?vercelToolbarCode=KDdCeG6f71YoHhZ">
        <h5 className="mb-4">
          Amy Hirschi Coaching
        </h5>
        <Image src={amyHirschiCoaching} alt={"Screenshot of amyhirschicoaching.com"} className="rounded-md"></Image>
      </a>
      <div className="card">
        <h5>
          More projects in development and coming soon!
        </h5>
      </div>
    </section>
  )
}