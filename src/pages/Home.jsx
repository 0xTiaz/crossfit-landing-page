
import { BackEffects } from "../components/BackEffect";
import { Banner } from "../components/Banner";
import { Clases } from "../components/Clases";
import { Coach } from "../components/Coach";
import { Contactanos } from "../components/Contactanos";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Program } from "../components/Program";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* ThemeToggle */}

      {/* Background Effects */}
      <BackEffects />
      {/* NavBar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <Banner />
        <Coach />
        <Program />
        <Clases />
        <Contactanos />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
