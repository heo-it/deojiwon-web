export default function MainHero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center rounded-lg"
      style={{ backgroundImage: "url('/main-hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4 rounded-lg">
        <h2 className="text-xl md:text-4xl font-bold text-white">
          <span className="text-red-500">더</span> 편하고,{" "}
          <span className="text-red-500">더</span> 안전한
          <br />
          업무 환경을 만들어 갑니다.
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <FeatureCard
            title="A to Z"
            description="설계/시공/감리/ 유지보수 통합"
          />
          <FeatureCard
            title="★★★★★"
            description="고객으로부터 신뢰 받는 기업"
          />
          <FeatureCard title="11" description="11년간 축적된 기술 노하우" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white bg-opacity-90 shadow-md rounded-xl px-6 py-4 text-center w-64">
      <div className="text-2xl font-bold text-red-600 mb-2">{title}</div>
      <div className="text-gray-800">{description}</div>
    </div>
  );
}
