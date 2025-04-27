"use client";

import Image from "next/image";

export default function ConstructionContent() {
  return (
    <section className="w-full bg-white text-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h1 className="hidden">네트워크 공사</h1>

        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/network-hero.webp"
            alt="네트워크 시공"
            width={1200}
            height={500}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <p className="text-white text-xl md:text-5xl font-semibold text-center px-4 leading-relaxed">
              <span className="text-red-500 font-bold">전문</span> 자격을 갖춘
              엔지니어가
              <br className="md:block" />
              직접 시공합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 text-center text-base sm:text-base font-bold">
          {[
            "LAN 공사",
            "인터넷 / WiFi",
            "CCTV / NVR",
            "키폰 / 전화 / FAX",
            "방화벽 / VPN",
            "IPTV / NAS",
          ].map((item, i) => (
            <div key={i} className="py-3 px-2 bg-gray-100 rounded shadow-sm">
              {item}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {[
            "/network-1.webp",
            "/network-2.webp",
            "/network-3.webp",
            "/network-4.webp",
            "/network-5.webp",
            "/network-6.webp",
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded shadow">
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

        <div className="mt-8 text-center text-lg text-gray-600">
          다양한 네트워크 환경에 맞는 맞춤형 설계를 통해 안정적인 통신 환경을
          구축합니다. <br />
          기업, 학원, 병원, 공공기관 등 다양한 환경에서 신뢰할 수 있는 서비스를
          제공합니다.
        </div>
      </div>
    </section>
  );
}
