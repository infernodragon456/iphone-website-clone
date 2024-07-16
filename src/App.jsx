import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import * as Sentry from "@sentry/react";
import Specs from "./components/Specs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="bg-black">
        <Navbar></Navbar>
        <Hero></Hero>
        <Highlights></Highlights>
        <Model></Model>
        <Features></Features>
        <Specs />
        <Footer />
      </main>
    </>
  );
}

export default Sentry.withProfiler(App);
