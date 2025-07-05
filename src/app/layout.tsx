import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ちゃばしら - 一服のやさしさを",
  description: "そっと差し出す、ひとときのやさしさ。応援の気持ちを一服に込めて。",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ちゃばしら - 一服のやさしさを",
    description: "そっと差し出す、ひとときのやさしさ。応援の気持ちを一服に込めて。",
    url: "https://chabashirayon.vercel.app/",
    siteName: "ちゃばしら",
    images: [
      {
        url: "https://chabashirayon.vercel.app/ogp.png",
        width: 1200,
        height: 630,
        alt: "ちゃばしら - 一服のやさしさを",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ちゃばしら - 一服のやさしさを",
    description: "そっと差し出す、ひとときのやさしさ。",
    images: ["https://chabashirayon.vercel.app/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}