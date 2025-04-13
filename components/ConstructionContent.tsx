"use client";

import Image from "next/image";

export default function ConstructionContent() {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* 타이틀 */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h1 className="hidden">네트워크 공사</h1>

        {/* 강조 문구 (Hero 스타일) */}
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/network-hero.png"
            alt="네트워크 시공"
            width={1200}
            height={500}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <p className="text-white text-xl md:text-3xl font-semibold text-center px-4 leading-relaxed">
              <span className="text-red-500 font-bold">전문</span> 자격을 갖춘
              엔지니어가
              <br className="md:block" />
              직접 시공합니다.
            </p>
          </div>
        </div>

        {/* 서비스 종류 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 text-center text-sm sm:text-base font-medium">
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

        {/* 이미지 + 설명 섹션 */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {[
            "/network-1.png",
            "/network-2.png",
            "/network-3.png",
            "/network-4.png",
            "/network-5.png",
            "/network-6.png",
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

        {/* 설명 텍스트 */}
        <div className="mt-8 text-center text-sm text-gray-600">
          다양한 네트워크 환경에 맞는 맞춤형 설계를 통해 안정적인 통신 환경을
          구축합니다. <br />
          기업, 학원, 병원, 공공기관 등 다양한 환경에서 신뢰할 수 있는 서비스를
          제공합니다.
        </div>
      </div>
    </section>
  );
}
