'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import headshotGrayBlue from '../../public/headshot-gray-blue.webp';
import headshotGreenTan from '../../public/headshot-green-tan.webp';
import headshotNavyYellow from '../../public/headshot-navy-yellow.webp';
import headshotRedWhite from '../../public/headshot-red-white.webp';
import headshotDoomMode from '../../public/headshot-doom-mode.webp';
import Games from './games';
import MyCode from './my-code';
import Portfolio from './portfolio';
import ThemeSelect from './theme-select';
import localFont from 'next/font/local';

const doomLeftFont = localFont({ src: './AmazDooMLeft.ttf' });
const doomRightFont = localFont({ src: './AmazDooMRight.ttf' });

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState({
    name: 'gray-blue',
    text: '#ffffff',
    primary: '#3B82F6',
    secondary: '#71717a',
    backgroundPrimary: '#18181b',
    backgroundSecondary: '#27272a',
  });

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
          {currentTheme.name === 'gray-blue' && (
            <Image
              priority
              loading="eager"
              src={headshotGrayBlue}
              alt="headshot"
              className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-secondary"
            />
          )}
          {currentTheme.name === 'green-tan' && (
            <Image
              priority
              loading="eager"
              src={headshotGreenTan}
              alt="headshot"
              className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-secondary"
            />
          )}
          {currentTheme.name === 'navy-yellow' && (
            <Image
              priority
              loading="eager"
              src={headshotNavyYellow}
              alt="headshot"
              className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-secondary"
            />
          )}
          {currentTheme.name === 'red-white' && (
            <Image
              priority
              loading="eager"
              src={headshotRedWhite}
              alt="headshot"
              className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-secondary"
            />
          )}
          {currentTheme.name === 'doom-mode' && (
            <Image
              priority
              loading="eager"
              src={headshotDoomMode}
              alt="headshot"
              className="h-[350px] w-[350px] min-w-[350px] rounded-full outline outline-8 outline-secondary"
            />
          )}
        </div>

        {/* Right side w/ words */}
        <div>
          <h3 className="text-secondary text-xl">Hello! My name is:</h3>

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
