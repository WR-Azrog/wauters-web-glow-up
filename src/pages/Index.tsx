import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-roboto">
      <Sidebar />
      <main>
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;