import React from "react";
import Dashboard from "./components/Dashboard";
import Chart from "./components/Chart";
import ProductDetail from "./components/ProductDetail";
import "./styles.css";
import logo from "./stackline_logo.svg";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img className="logo-image" src={logo} alt={logo} />
      </div>
      <div className="content-container">
        <div className="left-section">
          <ProductDetail />
        </div>
        <div className="right-section">
          <Chart />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
