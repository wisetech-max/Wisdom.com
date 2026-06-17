import React from "react";
import NavBar from "./Components/NavBar";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
