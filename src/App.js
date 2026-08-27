import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <About />
        <Clients />
        <Features />
        <Services />
        <CTA />
        <Portfolio />
        <Stats />
        <Testimonials />
        <Team />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
