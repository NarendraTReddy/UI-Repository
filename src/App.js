import React from "react";
import "./App.css";

import menu from "./assets/menu.png";

import BowlingGame from "./components/Game";

const App = () => {
  return (
    <div className="App">
      <div class="header" id="header">
        <div class="header-content">Ten Pin Bowling</div>
        <div class="user">
          <span className="welcoome-user">welcome User </span>
          <img className="img" src={menu} alt={"menu"} />
        </div>
      </div>
      <BowlingGame />
    </div>
  );
};

export default App;
