import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PokebagProvider } from "./store/context";
import Topbar from "./components/topbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pokemon Enjoyer",
  description: "Pokemon Enjoyer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PokebagProvider>
          <Topbar />
          {children}
        </PokebagProvider>
      </body>
    </html>
  );
}
