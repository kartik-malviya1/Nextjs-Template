import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next Starter",
  description: "Created for Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨🏻‍💻</text></svg>"
      />
      <body>{children}</body>
    </html>
  );
}
