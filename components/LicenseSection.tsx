import Image from "next/image";

export default function LicenseSection() {
  return (
    <section className="py-16 px-4 md:px-20">
      <h3 className="text-2xl font-semibold text-center mb-12">면허증</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <LicenseCard title="정보통신공사업" imageSrc="/license-1.webp" />
        <LicenseCard title="엔지니어링사업" imageSrc="/license-2.webp" />
        <LicenseCard title="소프트웨어사업" imageSrc="/license-3.webp" />
      </div>
    </section>
  );
}

function LicenseCard({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <div className="bg-blue-600 text-white text-center py-2 text-lg font-semibold">
        {title}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={700}
        className="w-full h-auto"
      />
    </div>
  );
}
