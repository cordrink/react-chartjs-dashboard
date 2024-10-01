import { createContext, useState } from "react";
import fulldata from "./fulldata";

export const DashboardContext = createContext();

const DashboardContextProvider = (props) => {
  const [dataChart, setDataChart] = useState(fulldata["2020"]);
  const [yearData, setYearData] = useState("2020");

  const changeYear = (el) => {
    setDataChart(fulldata[el.target.value]);
    setYearData(el.target.value);
  };

  const value = {
    changeYear,
    dataChart,
    yearData,
  };

  return (
    <DashboardContext.Provider value={value}>
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
