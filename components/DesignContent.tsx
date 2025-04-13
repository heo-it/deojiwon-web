import Image from "next/image";
import ServiceBenefit from "./ServiceBenefit";

export default function DesignContent() {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* 타이틀 */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h1 className="hidden">네트워크 설계/구축</h1>

        {/* 강조 문구 (Hero 스타일) */}
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/design-hero.png"
            alt="네트워크 설계/구축"
            width={1200}
            height={500}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <p className="text-white text-xl md:text-3xl font-semibold text-center px-4 leading-relaxed">
              <span className="text-red-500 font-bold">
                경제성/안정성/보안성
              </span>{" "}
              높은 <br className="md:hidden" />
              최적 네트워크를 구축합니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center gap-20 py-16 px-4 md:px-20">
          <div className="">
            <Image
              src="/design-drawing.png"
              alt="네트워크 설계/구축 도면"
              width={500}
              height={500}
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-6 shrink-0">
            <ServiceBenefit />
          </div>
        </div>
      </div>
    </section>
  );
}
