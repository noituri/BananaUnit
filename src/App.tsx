import { useState } from "react";
import BananaViewer from "./components/BananaViewer";
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
            At BananaUnit, we believe that measurement should be{" "}
            <span className="accent">intuitive</span>,
            <span className="accent"> accessible</span>, and{" "}
            <span className="accent">fun</span>. That's why we've created the
            world's first measuring system based on 🍌 bananas!
          </p>
          <hr />
          <div className="left">
            <h2>Banana units are important</h2>
            <p>
              They offer a universal, standardized way to measure length, width,
              and volume. Unlike traditional units like inches or centimeters,
              which can vary between countries or even regions, banana units
              provide a consistent way to compare sizes and quantities.
            </p>
          </div>
          <div className="right">
            <h2>Fun</h2>
            <p>
              Not only are banana units practical, but they're also a fun way to
              engage people with measurement and encourage creativity. Imagine
              being able to describe the length of your couch as "6 bananas
              long" or the volume of your coffee mug as "2 banana units." By
              using banana units, we can make measurement accessible and
              enjoyable for everyone, regardless of age or background. At
              BananaUnit, we're passionate about bringing this innovative
              measuring system to the masses. Whether you're a designer, a
              crafter, or just someone who wants a more fun and imaginative way
              to measure things, we invite you to join us in our mission to
              revolutionize the way we think about measurement.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
