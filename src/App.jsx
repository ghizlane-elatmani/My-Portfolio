import React from "react";
import { About, Footer, Hero, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
