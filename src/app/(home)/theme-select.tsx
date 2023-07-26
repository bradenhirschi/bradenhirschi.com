"use client";

import { useState } from "react";
import { BiPaint } from "react-icons/bi";

const ThemeSelect = ({ setTheme }: { setTheme: any }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const themes = [
    {
      name: "gray-blue",
      text: "#ffffff",
      primary: "#3B82F6",
      secondary: "#71717a",
      backgroundPrimary: "#18181b",
      backgroundSecondary: "#27272a",
    },
    {
      name: "navy-yellow",
      text: "#ffffff",
      primary: "#f59e0b",
      secondary: "#64748b",
      backgroundPrimary: "#0f172a",
      backgroundSecondary: "#1e293b",
    },
    {
      name: "green-tan",
      text: "#000000",
      primary: "#16a34a",
      secondary: "#166534",
      backgroundPrimary: "#fff7ed",
      backgroundSecondary: "#ffedd5",
    },
  ];

  const handleChangeMenuState = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChangeTheme = (theme: any) => {
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
    setTheme(theme);
  };

  return (
    <div className="fixed top-0 left-0 m-4">
      <button
        className="rounded-full flex items-center justify-center bg-primary text-background-primary w-[40px] h-[40px]"
        onClick={handleChangeMenuState}
      >
        <BiPaint size="24" />
      </button>
      {menuOpen && (
        <div className="flex flex-col">
          {themes.map((theme) => {
            return (
              <button
                key={theme.primary}
                className="rounded-full w-[40px] h-[40px] mt-2 flex items-center justify-center"
                style={{
                  backgroundColor: theme.primary,
                  color: theme.backgroundSecondary,
                }}
                onClick={() => handleChangeTheme(theme)}
              >
                <BiPaint size="24" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeSelect;
