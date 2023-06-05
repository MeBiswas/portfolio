// Hooks
import { useState, useEffect } from "react";
// Components
// import CTA from "./components/CTA";
import Intro from "./components/Intro";
import About from "./components/About";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Stats from "./components/Stats/index";
import Services from "./components/Servicess";
import Footer from "./components/Footer/index";
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
      {/* <CTA /> */}
      <Services />
      <Stats
        cupCount={10}
        awardsCount={1}
        ideaCount={15}
        clientCount={2}
        hourCount={50}
        projectCount={3}
      />
      <Contact />
      <Footer name="Abhipriyo Biswas" />
      {isLoading && <PreLoader />}
    </>
  );
};

export default App;
