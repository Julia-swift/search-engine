import React from "react";
import SearchEngine from "./SearchEngine";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <SearchEngine />

      <p>
        {" "}
        <a
          href="https://github.com/Julia-swift/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Yuliya Stryzhova
      </p>
    </div>
  );
}
