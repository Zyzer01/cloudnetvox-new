import { Archivo } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import DomainContextProvider from "@/context/DomainContext";
import PageWrapper from "@/components/PageWrapper";
import TopBanner from "@/components/TopBanner";
import NavBar from "@/components/NavBar";

const archivo = Archivo({ subsets: ["latin"], display: "swap" });

export const viewport = {
  themeColor: "#06155A",
};

export const metadata = {
  title: "Cloudnetvox",
  description:
    "Maximize Your Online Presence on a Budget! Launch Your Business into the Digital Realm with Cloudnetvox! – Achieve More, Spend Less. Transform Your Vision into Reality and Score Massive Savings on All the Essentials for Kickstarting Your Fresh Website. Loaded with Handy Features. Unbeatable Value and Prices for Web Products.",
  manifest: "https://cloudnetvox.com/manifest.json",
  category: "technology",
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Cloudnetvox',
  //   description: 'Maximize Your Online Presence on a Budget! Launch Your Business into the Digital Realm with Cloudnetvox! – Achieve More, Spend Less. Transform Your Vision into Reality and Score Massive Savings on All the Essentials for Kickstarting Your Fresh Website. Unbeatable Value and Prices for Web Products.',
  //   siteId: '1467726470533754880',
  //   creator: '@cloudnetvox',
  //   creatorId: '1467726470533754880',
  //   images: ['https://cloudnetvox.com/og.png'],
  //   images: {
  //     url: 'https://nextjs.org/og.png',
  //     alt: 'Next.js Logo',
  //   },
  //   app: {
  //     name: 'twitter_app',
  //     id: {
  //       iphone: 'twitter_app://iphone',
  //       ipad: 'twitter_app://ipad',
  //       googleplay: 'twitter_app://googleplay',
  //     },
  //     url: {
  //       iphone: 'https://iphone_url',
  //       ipad: 'https://ipad_url',
  //     },
  //   },
  // },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <DomainContextProvider>
          <TopBanner />
          <NavBar />
          {children}
          <Footer />
        </DomainContextProvider>
      </body>
    </html>
  );
}
