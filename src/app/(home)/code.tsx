import { useTheme } from "../theme-context";
import { rgbToHex } from "@/src/utils/rgb-to-hex";

const codeLinks: { link: string; title: string; description: string }[] = [
  {
    link: "https://github.com/bradenhirschi/gd-styles",
    title: "GD Styles 🖌️",
    description:
      "Chrome extension that converts any element's CSS styles to Tailwind classes",
  },
  {
    link: "https://github.com/bradenhirschi/bradenhirschi.com",
    title: "bradenhirschi.com 💻",
    description:
      "Open source code for this website! Built with Next.js and styled with Tailwind (and some custom CSS for the fun parts)",
  },
  {
    link: "https://github.com/bradenhirschi/instagram-bot",
    title: "Instagram Bot 📷",
    description:
      "Node.js script using the Instagram private API to automate posting on Instagram",
  },
  {
    link: "https://github.com/bradenhirschi/fire-daily-bot",
    title: "Fire Daily Bot 📝",
    description:
      "Node.js script that uses the OpenAI ChatGPT API to write daily news articles for my news website FireDailyNews.com",
  },
  {
    link: "https://github.com/bradenhirschi/suite-for-spotify",
    title: "Suite for Spotify 🎧",
    description:
      "Android app letting users view their Spotify listening stats. Built with Kotlin, Jetpack Compose, and Material 3 Design",
  },
];

const Code = () => {
  const { theme } = useTheme();
  const chartColor = rgbToHex(theme.primary);

  return (
    <section className="h-screen min-h-screen snap-center flex flex-col px-4 py-8 md:px-8 lg:px-24 xl:px-32 items-center justify-center">
      <h2 className="pb-4">My Code</h2>
      <a href="https://github.com/bradenhirschi">
        <img
          src={`https://ghchart.rshah.org/${chartColor}/bradenhirschi`}
          alt="bradenhirschi's GitHub contributions chart"
        />
      </a>

      <div className="w-full mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 relative z-1">
          {codeLinks.map((codeLink) => (
            <a
              key={JSON.stringify(codeLink)}
              href={codeLink.link}
              target="_blank"
              rel="noreferrer"
              className="code-card"
            >
              <h4 className="card-title">{codeLink.title}</h4>
              <p className="text-sm font-light z-[1000]">
                {codeLink.description}
              </p>
              <div className="shine" />
              <div className="background">
                <div className="tiles">
                  <div className="tile tile-1"></div>
                  <div className="tile tile-2"></div>
                  <div className="tile tile-3"></div>
                  <div className="tile tile-4"></div>

                  <div className="tile tile-5"></div>
                  <div className="tile tile-6"></div>
                  <div className="tile tile-7"></div>
                  <div className="tile tile-8"></div>

                  <div className="tile tile-9"></div>
                  <div className="tile tile-10"></div>
                </div>

                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Code;
