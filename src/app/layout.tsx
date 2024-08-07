import "./globals.css";
import { ThemeProvider } from "./theme-context";

export const metadata = {
  title: "Braden Hirschi",
  description: "Personal website for Braden Hirschi",
  metadataBase: new URL("https://www.bradenhirschi.com"),
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
