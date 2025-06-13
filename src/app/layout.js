import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Providers from "./Providers";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDB Clone",
  description: "A clone of the IMDB website built with Next.js",
  openGraph: {
    title: "IMDB Clone",
    description: "A clone of the IMDB website built with Next.js",
    url: "https://imdb-clone.vercel.app",
    siteName: "IMDB Clone",
    images: [
      {
        url: "https://imdb-clone.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMDB Clone OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
