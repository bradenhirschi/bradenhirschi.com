import Footer from "./(home)/footer";
import "./globals.css";

export const metadata = {
  title: "Braden Hirschi",
  description: "Personal website for Braden Hirschi",
  metadataBase: new URL("https://www.bradenhirschi.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
