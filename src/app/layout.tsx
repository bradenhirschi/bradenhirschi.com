import './globals.css'

export const metadata = {
  title: 'Braden Hirschi',
  description: 'Personal website for Braden Hirschi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
