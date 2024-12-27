"use client";

import { useEffect } from "react";
import Games from "./games";
import Code from "./code";
import Work from "./work";
import ThemeSelect from "./theme-select";
import Hero from "./hero-section";

export default function Home() {
  const makeKeySequenceListener = (keySequence: any, callback: () => void) => {
    let keys = "";

    return (e: any) => {
      keys += e.key;
      if (keys === keySequence) {
        callback();
        keys = "";
      } else if (!keySequence.startsWith(keys)) {
        keys = "";
      }
    };
  };

  const handleOpenGames = () => {
    window.location.href = "#games";
    document.dispatchEvent(new Event("games-opened"));
  };

  useEffect(() => {
    const listener = makeKeySequenceListener(
      "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba",
      handleOpenGames
    );
    document.addEventListener("keyup", listener);

    return () => {
      document.removeEventListener("keyup", listener);
    };
  }, []);

  return (
    <main className="flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory">
      <Games />
      <Hero />
      <Work />
      <Code />
      <ThemeSelect />
    </main>
  );
}
