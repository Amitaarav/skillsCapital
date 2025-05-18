
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MainComponents } from "@/components/Body/sourceDeploy/MainComponents";
import { MainComponent } from "@/components/Body/aiPoweredDeep/components/MainComponents";
import { EnterPriseGrade } from "@/components/Body/enterpriseGrade/EnterPriseGrade";
import { IndiaSAP } from "@/components/Body/indiaSAP/IndiaSAP";
import { Footer } from "@/components/Footer/Footer";
import { TestimonialComponent } from "@/components/Body/testimonial/TestimonialComponent";
import { MeetElite } from "@/components/Body/elite/MeetElite";
import { ReinforceComponent } from "@/components/Body/reinforceValue/ReinforceComponent";
export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <MainComponents />
      <MainComponent />
      <EnterPriseGrade />
      <IndiaSAP />
      <MeetElite />
      <TestimonialComponent/>
      <ReinforceComponent/>
      <Footer />
    </div>
  );
}
