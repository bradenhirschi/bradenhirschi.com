const codeLinks: { link: string; title: string; description: string }[] = [
  {
    link: "https://github.com/bradenhirschi/gd-styles",
    title: "GD Styles",
    description:
      "Chrome extension that converts any element's CSS styles to Tailwind classes",
  },
  {
    link: "https://github.com/bradenhirschi/bradenhirschi.com",
    title: "bradenhirschi.com",
    description:
      "Open source code for this website! Built with Next.js and Typescript and styled with Tailwind and custom CSS",
  },
  {
    link: "https://github.com/bradenhirschi/instagram-bot",
    title: "Instagram Bot",
    description:
      "Node.js bot using the Instagram private API to automatically create Instagram posts",
  },
  {
    link: "https://github.com/bradenhirschi/fire-daily-bot",
    title: "Fire Daily Bot",
    description:
      "Node.js bot that uses the ChatGPT API to write daily news articles for my news website FireDailyNews.com",
  },
  {
    link: "https://github.com/bradenhirschi/suite-for-spotify",
    title: "Suite for Spotify",
    description:
      "Android app letting users view their Spotify stats. Built with Kotlin, Jetpack Compose, and Material 3 Design",
  },
];

const Code = ({ theme }: { theme: any }) => {
  let chartColor;

  if (theme && theme.primary) {
    const rgbArray = theme.primary.split(" ");

    const r = parseInt(rgbArray[0], 10).toString(16).padStart(2, "0");
    const g = parseInt(rgbArray[1], 10).toString(16).padStart(2, "0");
    const b = parseInt(rgbArray[2], 10).toString(16).padStart(2, "0");

    chartColor = `${r}${g}${b}`;
  } else {
    chartColor = "3B82F6";
  }

  return (
    <section className="h-screen min-h-screen snap-center flex flex-col px-8 py-8 md:px-16 lg:px-24 xl:px-32 items-center justify-center">
      <h1 className="pb-4">My Code</h1>
      <a href="https://github.com/bradenhirschi">
        <img
          src={`https://ghchart.rshah.org/${chartColor}/bradenhirschi`}
          alt="bradenhirschi's GitHub contributions chart"
        />
      </a>

      <div className="w-full mt-8">
        {/* <div className="grid1 grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 relative z-1">
          {codeLinks.map((codeLink) => (
            <a
              key={JSON.stringify(codeLink)}
              href={codeLink.link}
              target="_blank"
              rel="noreferrer"
              className="code-card"
            >
              <h2 className="overflow-ellipsis overflow-hidden whitespace-nowrap">
                {codeLink.title}
              </h2>
              <p className="text-sm font-light">{codeLink.description}</p>
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
