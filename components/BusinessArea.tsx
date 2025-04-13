"use client";
import React from "react";
import { cn } from "../lib/utils";
import useMediaQuery from "../hooks/useMediaQuery";

const labels = [
  "정보통신\n설계 / 감리\n(엔지니어링업)",
  "네트워크\n공사\n(LAN/전화/CCTV)",
  "네트워크\n설계 / 구축\n(IT인프라/전화망)",
  "정보통신\n유지보수\n(빌딩/기업/아파트)",
  "정보통신\n공사\n(정보통신공사업)",
  "초고속\n자가망/인프라\n구축",
];

const achievements = [
  { year: "2023년", text: "평택교육청 학교 무선인프라 설계" },
  { year: "2023년", text: "평택시 방범 CCTV 설치공사" },
  { year: "2023년 ~ 25년", text: "평택해양경찰서 전산장비 유지보수" },
  { year: "2024년", text: "안성 금광초 통신공사 감리" },
  { year: "2024년", text: "평택지산초 현대화 통신공사" },
  { year: "2025년", text: "일산동구보건소 청사 건립 통신공사" },
];

export default function BusinessArea() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const radius = isDesktop ? 200 : 120;

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-20">
        <div className="relative grow h-[350px] md:h-[550px]">
          <Hexagon
            text="사업분야"
            center
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          />

          {labels.map((text, index) => {
            const angle = (index / labels.length) * 360;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <Hexagon
                key={index}
                text={text}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
              />
            );
          })}
        </div>

        <div className="space-y-6 shrink-0">
          <div>
            <h3 className="text-xl font-semibold mb-2">MAJOR PARTNER</h3>
            <img src="/lg-uplus-logo.png" alt="LG U+" className="h-10" />
          </div>
          <ul className="space-y-2 text-lg">
            {achievements.map((item, idx) => (
              <li key={idx}>
                <span className="font-bold">{item.year}</span>{" "}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Hexagon({
  text,
  center = false,
  className,
  style,
}: {
  text: string;
  center?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "w-[120px] h-[104px] md:w-[200px] md:h-[173px]",
        "flex flex-col justify-center items-center text-center text-xs md:text-lg font-medium p-1 md:p-4",
        "bg-gradient-to-br from-white to-blue-100 border border-gray-300 shadow-md",
        "clip-hexagon transition-all",
        center && "bg-orange-100 text-black font-bold",
        className
      )}
      style={style}
    >
      {text.split("\n").map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}
