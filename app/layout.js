import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head-loaded",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-body-loaded",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-loaded",
});

export const metadata = {
  metadataBase: new URL("https://reaction-work.vercel.app"),
  title: {
    default: "reaction.work — Full-stack разработчик",
    template: "%s · reaction.work",
  },
  description: "Собираю сайты, интернет-магазины и веб-приложения. 6 лет в разработке.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "reaction.work",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },   
  icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  apple: "/apple-touch-icon.png",
};

export const viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${anton.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Lightbox />
      </body>
    </html>
  );
}