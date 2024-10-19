import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
