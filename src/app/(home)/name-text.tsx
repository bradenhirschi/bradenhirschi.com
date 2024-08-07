import localFont from "next/font/local";
import { useTheme } from "../theme-context";

const peopleUnderTheStairsFont = localFont({
  src: "../../../public/SmartSansBold.otf",
});
const doomLeftFont = localFont({ src: "../../../public/AmazDooMLeft.ttf" });
const doomRightFont = localFont({ src: "../../../public/AmazDooMRight.ttf" });

const NameText = () => {
  const { theme } = useTheme();

  switch (theme.name) {
    case "people-under-the-stairs":
      return (
        <h1
          style={{
            textShadow:
              "1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black, 5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black, 9px 9px black, 10px 10px black, 11px 11px black, 12px 12px black, 13px 13px black, 14px 14px black, 15px 15px black",
          }}
          className={`${peopleUnderTheStairsFont.className} text-[100px]`}
        >
          Braden Hirschi
        </h1>
      );
    case "doom-mode":
      return (
        <div className="text-[100px]">
          <span className={`${doomLeftFont.className} uppercase`}>Braden</span>
          <span className={doomRightFont.className + " uppercase"}>
            &nbsp;Hirschi
          </span>
        </div>
      );
    default:
      return (
        <h1 className="pb-4 flex-row">
          Braden
          <span className="text-primary font-serif">&nbsp;Hirschi</span>
        </h1>
      );
  }
};

export default NameText;
