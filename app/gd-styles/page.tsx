import gdStylesLogo from "../../public/gd-styles-logo.png";
import Image from "next/image";
import { BiLogoChrome, BiLogoGithub } from "react-icons/bi";

const GdStyles = () => {
  return (
    <main>
      <div className="p-4 flex justify-center items-center">
        <Image src={gdStylesLogo} alt="GD Styles logo" width={75} height={75} />
        <h1 className="text-4xl">Styles</h1>
      </div>
      <div className="flex justify-center items-center">
        <a href="https://chrome.google.com/webstore/detail/gd-styles/pjjhmajhdkfcolcpmfgimbgmkonbfnpl">
          <BiLogoChrome className="w-[30px] h-[30px] text-secondary" />
        </a>
        <a href="https://github.com/bradenhirschi/gd-styles">
          <BiLogoGithub className="w-[30px] h-[30px] text-secondary" />
        </a>
      </div>
      <section className="grid grid-cols-2 px-4 md:px-16 lg:px-40 py-8">
        <div>
          <h1>“Good designers copy, great designers steal.”</h1>
          <h2>- Pablo Picasso</h2>
        </div>
      </section>
    </main>
  );
};

export default GdStyles;
