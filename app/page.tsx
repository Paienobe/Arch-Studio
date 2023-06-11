import Featured from "@/components/Featured/Featured";
import Hero from "@/components/Hero/Hero";
import SmallTeam from "@/components/HomeAbout/SmallTeam";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WelcomeSection />
      <SmallTeam />
      <Featured />
    </main>
  );
}
