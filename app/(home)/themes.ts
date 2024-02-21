export interface Theme {
  name: string;
  text: string;
  primary: string;
  secondary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
}

export const THEMES: {[key: string]: Theme} = {
  GRUVBOX: {
    name: 'gruvbox',
    text: '#ebdbb2',
    primary: '#458588',
    secondary: '#d79921',
    backgroundPrimary: '#282828',
    backgroundSecondary: '#1d2021',
  },
  GRAY_BLUE: {
    name: 'gray-blue',
    text: '#ffffff',
    primary: '#3B82F6',
    secondary: '#71717a',
    backgroundPrimary: '#18181b',
    backgroundSecondary: '#27272a',
  },
  RED_WHITE: {
    name: 'red-white',
    text: '#000000',
    primary: '#FA2742',
    secondary: '#373833',
    backgroundPrimary: '#E8EAE3',
    backgroundSecondary: '#d6d7d1',
  },
  NAVY_YELLOW: {
    name: 'navy-yellow',
    text: '#ffffff',
    primary: '#f59e0b',
    secondary: '#64748b',
    backgroundPrimary: '#0f172a',
    backgroundSecondary: '#1e293b',
  },
  GREEN_TAN: {
    name: 'green-tan',
    text: '#000000',
    primary: '#16a34a',
    secondary: '#166534',
    backgroundPrimary: '#fff7ed',
    backgroundSecondary: '#ffedd5',
  },
  DOOM: {
    name: "doom-mode",
    text: "#ffffff",
    primary: "#95100b",
    secondary: "#aaaaaa",
    backgroundPrimary: "#000000",
    backgroundSecondary: "#111111",
  }
};
