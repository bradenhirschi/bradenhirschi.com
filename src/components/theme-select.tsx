"use client";

import { useEffect, useState } from "react";
import { BiPaint } from "react-icons/bi";
import { THEMES, Theme } from "../app/themes";

const ThemeSelect = ({
  currentTheme,
  setCurrentTheme,
}: {
  currentTheme: Theme;
  setCurrentTheme: any;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChangeTheme = (theme: Theme) => {
    document.documentElement.style.setProperty("--text", theme.text);
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--secondary", theme.secondary);
    document.documentElement.style.setProperty(
      "--background-primary",
      theme.backgroundPrimary
    );
    document.documentElement.style.setProperty(
      "--background-secondary",
      theme.backgroundSecondary
    );
    setMenuOpen(false);
    setCurrentTheme(theme);
  };

  useEffect(() => {
    document.addEventListener("games-opened", () =>
      handleChangeTheme(THEMES.DOOM)
    );

    return () => {
      document.removeEventListener("games-opened", () =>
        handleChangeTheme(THEMES.DOOM)
      );
    };
  });

  return (
    <div className="fixed top-0 left-0 m-4">
      <button
        className="rounded-full flex items-center justify-center bg-primary text-background-primary w-[40px] h-[40px] hover:w-[42px] hover:h-[42px]"
        onClick={toggleMenuOpen}
      >
        <BiPaint size="24" />
      </button>
      {menuOpen && (
        <div className="flex flex-col">
          {Object.keys(THEMES)
            .filter((theme) => THEMES[theme] !== currentTheme)
            .map((themeName) => {
              const theme = THEMES[themeName];
              if (theme !== currentTheme) {
                return (
                  <button
                    key={theme.primary}
                    className={`rounded-full w-[40px] h-[40px] mt-2 flex items-center justify-center`}
                    style={{
                      color: `rgb(${theme.backgroundPrimary.split(" ").join(",")})`,
                      backgroundColor: `rgb(${theme.primary
                        .split(" ")
                        .join(",")})`,
                    }}
                    onClick={() => handleChangeTheme(theme)}
                  >
                    <BiPaint size="24" />
                  </button>
                );
              } else {
                return null;
              }
            })}
        </div>
      )}
    </div>
  );
};

export default ThemeSelect;
