import "./globals.css";

export const metadata = {
  title: "Braden Hirschi",
  description: "Personal website for Braden Hirschi",
  metadataBase: new URL("https://www.bradenhirschi.com"),
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
