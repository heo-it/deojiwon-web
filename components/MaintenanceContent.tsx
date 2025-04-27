import Image from "next/image";
import MaintenanceImages from "./MaintenanceImages";

export default function MaintenanceContent() {
  return (
    <section className="w-full bg-white text-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h1 className="hidden">정보통신 유지보수</h1>

        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/maintenance-hero.webp"
            alt="정보통신 유지보수"
            width={1200}
            height={500}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <p className="text-white text-xl md:text-5xl font-semibold text-center px-4 leading-relaxed">
              <span className="text-red-500 font-bold">빌딩/아파트</span>{" "}
              정보통신 유지보수를 <br className="md:block" />
              선도합니다.
            </p>
          </div>
        </div>

        {/* 서비스 종류 */}
        <div className="pt-4 pb-16">
          <MaintenanceImages />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-12 mt-10 text-center text-sm sm:text-lg font-medium sm:px-[14px]">
            {[
              "유지보수 관리자 선임",
              "장애처리 / 예방정비",
              "성능개선 / 증설",
            ].map((item, i) => (
              <div
                key={i}
                className="py-3 px-2 rounded shadow-sm border border-slate-400 w-[300px] m-auto"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
