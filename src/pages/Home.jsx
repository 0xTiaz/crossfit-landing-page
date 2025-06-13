
import { BackEffect } from "../components/BackEffect";
import { Banner } from "../components/Banner";
import { Clases } from "../components/Clases";
import { Coach } from "../components/Coach";
import { Contactanos } from "../components/Contactanos";
import { Disciplinas } from "../components/Disciplinas";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Program } from "../components/Program";
// import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* ThemeToggle */}
      {/* <ThemeToggle /> */}
      {/* Background Effects */}
      {/* <BackEffect /> */}
      {/* NavBar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <Banner />
        <Coach />
        <Program />
        <Clases />
        <Disciplinas />
        <Contactanos />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
