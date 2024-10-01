import React, { useContext } from "react";
import "./DashboardEmployees.css";
import { DashboardContext } from "../../context/DashboardContext";
import PieChart from "../../Components/AllChart/PieChart";

export default function DashboardEmployees() {
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

      <h2>Les secteurs qui ont recrute: </h2>
      <PieChart
        dataPie={dataChart.chart5}
        lables={["Marketing", "Securite", "Front-End"]}
      />
      <h2>L'age des nouveaux employes: </h2>
      <PieChart
        dataPie={dataChart.chart6}
        lables={["< 20", ">20 && < 30", "> 30 && <60"]}
      />
      <h2>Le niveau d'etudes: </h2>
      <PieChart
        dataPie={dataChart.chart7}
        lables={["Bac", "> Bac +2", "> Bac +5"]}
      />
      <h2>La nationalite: </h2>
      <PieChart dataPie={dataChart.chart8} lables={["USA", "Germany", "UK"]} />
    </div>
  );
}
