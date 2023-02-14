import { useState } from "react";
import BananaViewer from "./components/ViewerContainer";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <div className="front">
        <div className="container">
          <h1>Measure things with bananas 🍌</h1>
          <BananaViewer />
          {/* If viewer not empty */}
          <button className="measure-button">Upload</button>
        </div>
      </div>
      <div className="stats">
        <section className="container">
          <h1 className="heading">Banana Unit</h1>
          <p>
            <span className="bold">BananaUnit</span> introduces a new and
            innovative way to measure with a universal and standardized system
            based on bananas 🍌. This not only makes measurement{" "}
            <span className="accent">practical</span> but also{" "}
            <span className="accent">fun</span>,{" "}
            <span className="accent"> accessible</span> and{" "}
            <span className="accent"> creative</span> for everyone. Join us in
            revolutionizing measurement!
          </p>
        <p className="disclaimer">Disclaimer: website made as a joke</p>
        </section>
      </div>

    </div>
  );
}

export default App;
