import React from "react";
import "./styles.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";

export default function App() {
  return (
    <div className="App">
      <h1>React Charts</h1>
      <div className="chart">
        <LineChart />
        <BarChart />
        <DoughnutChart />
      </div>
    </div>
  );
}
