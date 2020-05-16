import React from "react";
import "../styles/home.scss";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

export default function Home() {
  return (
    <div className="header">
      <TypistLoop interval={3000}>
        {["Hello World", "Good Morning", "Bye"].map((text) => (
          <Typist.Backspace key={text} startDelay={1000}>
            {text}
          </Typist.Backspace>
        ))}
      </TypistLoop>
    </div>
  );
}
