import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import FeaturesScroll from "../FeaturesScroll";
import FutureSection from "../FutureSection";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main
        className="pt-32 min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(250, 204, 21, 0.3), rgba(34, 197, 94, 0.3), rgba(0, 0, 0, 0.3))`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <HeroSection />
        <FeaturesScroll />
        <FutureSection />
        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
