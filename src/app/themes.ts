export interface Theme {
  name: string;
  text: string;
  primary: string;
  secondary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundImage?: string;
}

export const THEMES: { [key: string]: Theme } = {
  GRAY_BLUE: {
    name: "gray-blue",
    text: "255 255 255",
    primary: "59 130 246",
    secondary: "113 113 122",
    backgroundPrimary: "24 24 27",
    backgroundSecondary: "39 39 42",
  },
  GRUVBOX: {
    name: "gruvbox",
    text: "235 219 178",
    primary: "69 133 136",
    secondary: "215 153 33",
    backgroundPrimary: "40 40 40",
    backgroundSecondary: "29 32 33",
  },
  RED_WHITE: {
    name: "red-white",
    text: "0 0 0",
    primary: "250 39 66",
    secondary: "55 56 51",
    backgroundPrimary: "232 234 227",
    backgroundSecondary: "214 215 209",
  },
  NAVY_YELLOW: {
    name: "navy-yellow",
    text: "255 255 255",
    primary: "245 158 11",
    secondary: "100 116 139",
    backgroundPrimary: "15 23 42",
    backgroundSecondary: "30 41 59",
  },
  GREEN_TAN: {
    name: "green-tan",
    text: "0 0 0",
    primary: "22 163 74",
    secondary: "22 101 52",
    backgroundPrimary: "255 247 237",
    backgroundSecondary: "255 237 213",
  },
  // DOCTOR_JOHN: {
  //   name: "doctor-john",
  //   text: "255 255 255",
  //   primary: "252 236 118",
  //   secondary: "246 119 87",
  //   backgroundPrimary: "10 2 12",
  //   backgroundSecondary: "127 54 99",
  //   backgroundImage: "https://www.transparenttextures.com/patterns/snow.png"
  // },
  PEOPLE_UNDER_THE_STAIRS: {
    name: "people-under-the-stairs",
    text: "253 253 215",
    primary: "148 148 116",
    secondary: "0 0 0",
    backgroundPrimary: "114 139 2",
    backgroundSecondary: "148 148 116",
  },
  DOOM: {
    name: "doom-mode",
    text: "255 255 255",
    primary: "149 16 11",
    secondary: "170 170 170",
    backgroundPrimary: "0 0 0",
    backgroundSecondary: "17 17 17",
    backgroundImage: "https://www.transparenttextures.com/patterns/hexellence.png"
  },
};
