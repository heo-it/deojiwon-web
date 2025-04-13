import Image from "next/image";
import LicenseSection from "./LicenseSection";

export const AboutContent = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h1 className="hidden">회사 소개</h1>

        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/about-hero.png"
            alt="회사 소개"
            width={1200}
            height={500}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <LicenseSection />
      </div>
    </section>
  );
};
