import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gladys Ayebia Ashong | Frontend & Mobile Developer",
  description:
    "Portfolio of Gladys Ayebia Ashong — Frontend & Mobile Developer specialising in React, Next.js, Flutter, Node.js and community management. Based in Accra, Ghana.",
  keywords: [
    "Gladys Ayebia Ashong",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Flutter",
    "Ghana Developer",
    "Mobile Developer",
    "Portfolio",
  ],
  authors: [{ name: "Gladys Ayebia Ashong" }],
  openGraph: {
    title: "Gladys Ayebia Ashong | Frontend & Mobile Developer",
    description:
      "Dedicated frontend and mobile developer with a passion for building beautiful, user-centred experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
