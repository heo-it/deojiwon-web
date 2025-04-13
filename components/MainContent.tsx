import BusinessArea from "./BusinessArea";
import MainHero from "./MainHero";

export default function MainContent() {
  return (
    <main className="w-full bg-white text-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <MainHero />
        <BusinessArea />
      </div>
    </main>
  );
}
