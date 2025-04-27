import Image from "next/image";

export default function CEOMessage() {
  return (
    <section className="flex flex-col items-center mt-16 px-4 text-center">
      <div className="relative">
        <h3 className="text-2xl font-semibold text-center mb-12">CEO 인사말</h3>
      </div>
      <div className="w-full max-w-screen-xl">
        <div className="relative w-full h-64 sm:h-80 md:h-96">
          <Image
            src="/ceo-greetings.webp"
            alt="CEO 메시지 배경"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center  bg-opacity-20 p-4">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              안전을 최우선으로 생각하며,
              <br />
              고객 만족을 위해 끊임없이 노력합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
