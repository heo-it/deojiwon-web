import React from "react";
import "./globals.css";

import localFont from "next/font/local";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <html lang="en" className={pretendard.className}>
      <body>
        <Header />
        <div className="pt-16 md:pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
