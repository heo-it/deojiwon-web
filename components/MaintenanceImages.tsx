"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MaintenanceImages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  const images = [
    "/maintenance-1.png",
    "/maintenance-2.png",
    "/maintenance-3.png",
    "/maintenance-4.png",
    "/maintenance-5.png", // 중심 이미지 (index 4)
    "/maintenance-6.png",
    "/maintenance-7.png",
    "/maintenance-8.png",
    "/maintenance-9.png",
  ];

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return;

      const boxes = containerRef.current.querySelectorAll(".image-box");
      const containerRect = containerRef.current.getBoundingClientRect();

      const newPositions = Array.from(boxes).map((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      });

      setPositions(newPositions);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <div className="relative mt-10">
      {positions.length === images.length && (
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          {positions.map((pos, i) => {
            if (i === 4) return null; // 중심 이미지
            return (
              <line
                key={i}
                x1={positions[4].x}
                y1={positions[4].y}
                x2={pos.x}
                y2={pos.y}
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
            );
          })}
        </svg>
      )}

      {/* 이미지 그리드 */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 justify-items-center"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="image-box overflow-hidden rounded shadow w-full md:max-w-[300px]"
          >
            <Image
              src={src}
              alt={`네트워크 이미지 ${i + 1}`}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
