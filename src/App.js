// Components
import CTA from "./components/CTA";
import Intro from "./components/Intro";
import About from "./components/About";
import Stats from "./components/Stats";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import PreLoader from "./components/PreLoader";
import Portfolio from "./components/Portfolio";

function App() {
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
      {/* <PreLoader /> */}
    </>
  );
}

export default App;
