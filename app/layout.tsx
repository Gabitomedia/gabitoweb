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
  metadataBase: new URL("https://gabitomedia.vercel.app"),
  title: "Gabito — Video Editor",
  description:
    "Video editor, filmmaker and content creator. I turn ideas into engaging visual stories.",
  keywords: [
    "Gabriel Di Tieri",
    "video editor",
    "video editing",
    "filmmaker",
    "content creator",
    "video editor Argentina",
    "freelance video editor",
    "Gabito",
    "Del rioba producciones",
  ],
  authors: [{ name: "Gabriel Di Tieri" }],
  creator: "Gabito",

  openGraph: {
  title: "Gabito — Video Editor",
  description:
    "Video editor, filmmaker and content creator. I turn ideas into engaging visual stories.",
  url: "https://gabitomedia.vercel.app",
  siteName: "Gabito — Video Editor",
  type: "website",
  locale: "en_US",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Gabito — Video Editor",
    },
  ],
},
  twitter: {
    card: "summary_large_image",
    title: "Gabito — Video Editor",
    description:
      "Video editor, filmmaker and content creator.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        {children}
      </body>
    </html>
  );
}
