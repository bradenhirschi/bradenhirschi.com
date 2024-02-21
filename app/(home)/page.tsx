'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import headshot from '../../public/headshot.webp';
import Games from './games';
import MyCode from './my-code';
import Portfolio from './portfolio';
import ThemeSelect from './theme-select';
import localFont from 'next/font/local';
import { THEMES } from './themes';

const doomLeftFont = localFont({ src: '../../public/AmazDooMLeft.ttf' });
const doomRightFont = localFont({ src: '../../public/AmazDooMRight.ttf' });

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState(THEMES.GRUVBOX);

  const makeKeySequenceListener = (keySequence: any, callback: () => void) => {
    let keys = '';

    return (e: any) => {
      keys += e.key;
      if (keys === keySequence) {
        callback();
        keys = '';
      } else if (!keySequence.startsWith(keys)) {
        keys = '';
      }
    };
  };

  const handleOpenGames = () => {
    window.location.href = '#games';
    document.dispatchEvent(new Event('games-opened'));
  };

  useEffect(() => {
    const listener = makeKeySequenceListener(
      'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba',
      handleOpenGames,
    );
    document.addEventListener('keyup', listener);

    return () => {
      document.removeEventListener('keyup', listener);
    };
  }, []);

  return (
    <main>
      <Games />
      {/* Hero section */}
      <section className="min-h-screen px-4 md:px-16 lg:px-40 py-8 flex flex-col lg:flex-row items-center justify-center lg:gap-16">
        {/* Left side w/ picture */}
        <div className="relative m-8">
          <Image
            priority
            loading="eager"
            src={headshot}
            alt="headshot"
            className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-secondary bg-primary"
          />
        </div>

        {/* Right side w/ words */}
        <div>
          <h3 className="text-secondary text-xl">Hello! My name is</h3>

          {currentTheme.name === 'doom-mode' ? (
            <div className="text-[100px]">
              <span className={doomLeftFont.className + ' uppercase'}>Braden</span>
              <span className={doomRightFont.className + ' uppercase'}>&nbsp;Hirschi</span>
            </div>
          ) : (
            <h1 className="pb-4 flex-row">
              Braden
              <span className="text-primary font-serif">&nbsp;Hirschi</span>
            </h1>
          )}

          <p className="text-lg">
            I&apos;m a passionate full-stack software engineer with a knack for creating dynamic
            digital experiences. I pride myself on my ability to seamlessly integrate elegant
            front-end experiences with smooth and robust back-end functionality. Keep scrolling to
            see some of my work!
          </p>
          <div className="flex flex-row pt-6 gap-2 text-lg">
            <a
              href="https://www.linkedin.com/in/braden-hirschi/"
              className="py-2 px-4 border-2 border-primary rounded-full flex flex-row"
            >
              <span className="hidden sm:block">Connect on&nbsp;</span>LinkedIn
            </a>
            <a
              href="https://github.com/bradenhirschi"
              className="py-2 px-4 border-2 border-secondary rounded-full flex flex-row"
            >
              <span className="hidden sm:block">View my&nbsp;</span>GitHub
            </a>
          </div>
        </div>
      </section>

      <Portfolio />

      <MyCode theme={currentTheme} />

      <ThemeSelect
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
    </main>
  );
}
