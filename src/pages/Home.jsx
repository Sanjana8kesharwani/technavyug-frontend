import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import StatsSection from "../components/home/StatsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import VerifySection from "../components/home/VerifySection";
import CertificatesSection from "../components/home/CertificatesSection";
import TopAchievers from "../components/home/TopAchieversSection";
import PartnersSection from "../components/home/PartnersSection";
import EventsSection from "../components/home/EventsSection";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <StatsSection />
      <VerifySection />
      <PartnersSection />
      <EventsSection />
      <TopAchievers />
      <ProjectsSection />

      <CertificatesSection />
    </MainLayout>
  );
};

export default Home;
