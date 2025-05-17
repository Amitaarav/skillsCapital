
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MainComponents } from "@/components/Body/sourceDeploy/MainComponents";
import { MainComponent } from "@/components/Body/aiPoweredDeep/components/MainComponents";
import { EnterPriseGrade } from "@/components/Body/enterpriseGrade/EnterPriseGrade";
export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <MainComponents />
      <MainComponent />
      <EnterPriseGrade />
    </div>
  );
}
