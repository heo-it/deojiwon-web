import Image from "next/image";

const Map = () => {
  return (
    <section className="flex flex-col items-center mt-16 px-4 text-center">
      <h3 className="text-2xl font-semibold text-center mb-12">오시는 길</h3>
      <Image
        src="/map.webp"
        alt="회사 소개"
        width={1200}
        height={500}
        className="rounded-lg w-full h-64 md:h-96 object-cover"
      />
    </section>
  );
};

export default Map;
