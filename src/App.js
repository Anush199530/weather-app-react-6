import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App container">
      <div className="container">
        <Weather defaultCity="Brussel"/>
        <footer>
          This probject is coded by Anush Arutunian and is{" "}
          <a
            href="https://github.com/Anush199530/weather-app-react-6"
            target="_blank"
            rel="noreferrer"
            
          >
            open-sourced on Github
          </a> and hosted on <a
            href="https://weather-app-react-6.vercel.app/?fbclid=IwAR0hCC2mlYwvFFLq0UPxwyohCTTwyBnCBl7-DmaxETBJApNSGjkLblAXOdI"
            target="_blank"
            rel="noreferrer"
            
          >
            Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}