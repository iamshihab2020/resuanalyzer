import HeroSection from "@/components/section/hero";

export default function Home() {
  return (
    <div className="font-sans grid items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[10px] row-start-1 items-center sm:items-start">
        <HeroSection/>
      </main>
    </div>
  );
}
