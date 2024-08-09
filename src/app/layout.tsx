import "./globals.css";
import { ThemeProvider } from "./theme-context";

export const metadata = {
  title: "Braden Hirschi",
  description: "Personal website for Braden Hirschi",
  metadataBase: new URL("https://www.bradenhirschi.com"),
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <script
        defer
        data-project="66b664e5507bcfb0999b3df6"
        src="https://cdn.jsdelivr.net/gh/litlyx/litlyx-js/browser/litlyx.js"
      ></script>
    </html>
  );
};

export default RootLayout;
