// Hooks
import { useState, useEffect } from "react";
// Components
import CTA from "./components/CTA";
import Intro from "./components/Intro";
import About from "./components/About";
import Stats from "./components/Stats";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Servicess";
import PreLoader from "./components/PreLoader";
import Portfolio from "./components/Portfolio";

const App = () => {
  // State
  const [isLoading, setLoading] = useState(true);
  // LifeCycle Method
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setLoading(!isLoading), 5000);
    }
  }, [isLoading]);

  return (
    <>
      <Header logoTitle="Menu" />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <CTA />
      <Services />
      <Stats />
      <Contact />
      <Footer />
      {isLoading && <PreLoader />}
    </>
  );
};

export default App;
