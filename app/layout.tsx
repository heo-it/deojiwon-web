import React from "react";
import "./globals.css";

import localFont from "next/font/local";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContactButtons from "../components/FloatingContactButtons";
import Script from "next/script";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17079959820"
        />
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17079959820');`}
        </Script>
      </head>
      <body>
        <main>
          <Header />
          <div className="pt-16 md:pt-20">{children}</div>
          <Footer />
        </main>
        <FloatingContactButtons />
      </body>
    </html>
  );
}

export const metadata = {
  title: "(주)더지원네트웍스",
  description:
    "(주)더지원네트웍스는 정보통신 설계, 시공, 감리, 유지보수, LAN 공사, 네트워크 구축, 초고속 광인프라 구축 사업을 전문으로 하는 기업입니다.",
  keywords: [
    "더지원",
    "네트워크",
    "네트웍스",
    "정보통신공사",
    "유지보수",
    "설계",
    "감리",
    "시공",
    "통합관리",
    "LAN(랜) 공사",
    "통신 공사",
    "CCTV",
    "통신",
    "공사",
    "구축",
    "정보통신",
    "평택",
    "안성",
    "오산",
    "화성",
    "천안",
    "아산",
  ],
  openGraph: {
    title: "(주)더지원네트웍스",
    description:
      "(주)더지원네트웍스는 정보통신 설계, 시공, 감리, 유지보수, LAN 공사, 네트워크 구축, 초고속 광인프라 구축 사업을 전문으로 하는 기업입니다.",
    siteName: "(주)더지원네트웍스",
    images: [
      {
        url: "https://d3s6d1ctpmgxva.cloudfront.net/main-hero.webp",
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
