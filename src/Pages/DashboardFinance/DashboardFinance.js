import React, { useContext } from "react";
import "./DashboardFinance.css";
import BarChart from "../../Components/AllChart/BarChart";
import { DashboardContext } from "../../context/DashboardContext";
import LineChart from "../../Components/AllChart/LineChart";

export default function DashboardFinance() {
  const { dataChart, yearData, changeYear } = useContext(DashboardContext);

  return (
    <div className="global-container">
      <h1>Les resultats de l'annee : {yearData}</h1>

      <form>
        <label htmlFor="year">choisissez une date</label>
        <select onChange={changeYear} id="year">
          <option selected={yearData === "2020" && "selected"} value="2020">
            2020
          </option>
          <option selected={yearData === "2019" && "selected"} value="2019">
            2019
          </option>
          <option selected={yearData === "2018" && "selected"} value="2018">
            2018
          </option>
          <option selected={yearData === "2017" && "selected"} value="2017">
            2017
          </option>
        </select>
      </form>

      <div className="dashboard-container">
        <BarChart dataBar={dataChart.chart1} name={"Chiffres bimestriels"} />
        <LineChart
          dataLine={dataChart.chart2}
          name={"Nombre d'abonnes (en millier)"}
        />
        <LineChart
          dataLine={dataChart.chart3}
          name={"Nombre de clients (en millier)"}
        />
        <BarChart dataBar={dataChart.chart4} name={"Chiffres bimestriels"} />
      </div>
    </div>
  );
}
