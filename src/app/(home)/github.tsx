const codeLinks: { link: string; title: string; description: string }[] = [
  {
    link: "https://github.com/bradenhirschi29/bradenhirschi.com",
    title: "bradenhirschi.com",
    description: "Open source code for this website!",
  },
  {
    link: "https://github.com/bradenhirschi29/amyhirschicoaching.com",
    title: "amyhirschicoaching.com",
    description:
      "Open source code for my mother's website which I designed and developed",
  },
];

export default function Github({ theme }: { theme: any }) {
  let chartColor;

  if (theme && theme.primary) {
    chartColor = theme.primary.slice(1);
  } else {
    chartColor = "3B82F6";
  }

  return (
    <section className="flex flex-col px-8 md:px-16 lg:px-40 items-center justify-center min-h-screen">
      <h1 className="pb-4">My Code</h1>
      <a href="https://github.com/bradenhirschi29">
        <img
          src={`https://ghchart.rshah.org/${chartColor}/bradenhirschi29`}
          alt="bradenhirschi29's GitHub contributions chart"
        />
      </a>

      <div className="w-full my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          {codeLinks.map((codeLink) => (
            <a
              key={JSON.stringify(codeLink)}
              href={codeLink.link}
              target="_blank"
              rel="noreferrer"
              className="card bg-zinc-50/5 hover:bg-zinc-50/10"
            >
              <h2 className="overflow-ellipsis overflow-hidden whitespace-nowrap">
                {codeLink.title}
              </h2>
              <p className="text-sm font-light">{codeLink.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
