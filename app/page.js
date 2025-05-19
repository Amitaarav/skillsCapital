
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AIPoweredService } from "@/components/Body/aiPoweredDeep/AIPoweredService"; 
import { EnterPriseGrade } from "@/components/Body/enterpriseGrade/EnterPriseGrade";
import { IndiaSAP } from "@/components/Body/indiaSAP/IndiaSAP";
import { SourceDeployComponents } from "@/components/Body/sourceDeploy/SourceDeployComponents";
import { Footer } from "@/components/Footer/Footer";
import { TestimonialComponent } from "@/components/Body/testimonial/TestimonialComponent";
import { MeetElite } from "@/components/Body/elite/MeetElite";
import { ReinforceComponent } from "@/components/Body/reinforceValue/ReinforceComponent";
import { MainExperienceComponent } from "@/components/Experience/MainExperienceComponent";
export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <SourceDeployComponents />
      <AIPoweredService />
      <EnterPriseGrade />
      <IndiaSAP />
      <MeetElite />
      <MainExperienceComponent />
      <TestimonialComponent/>
      <ReinforceComponent/>
      <Footer />
    </div>
  );
}
