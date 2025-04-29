
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import InvestmentCTA from "@/components/InvestmentCTA";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <InvestmentCTA />
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default Index;
