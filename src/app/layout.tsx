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
  title: {
    default: "Eric Deloach — Author of Rage of Angels & In Harm's Way",
    template: "%s | Eric Deloach",
  },
  description:
    "Official author site of Eric Deloach. Dark fantasy and gritty action — the Rage of Angels universe and the military thriller In Harm's Way. Where mythology and mayhem collide.",
  metadataBase: new URL("https://ericdeloach.com"),
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
      <body className="min-h-full flex flex-col bg-black text-zinc-100">
        {children}
      </body>
    </html>
  );
}
