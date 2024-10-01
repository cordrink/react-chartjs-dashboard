import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(...registerables);

export default function PieChart({ lables, dataPie }) {
  const data = {
    labels: lables,
    datasets: [
      {
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        //   borderColor: "rgb(0,0,255)",
        data: dataPie,
      },
    ],
  };

  return (
    <div className="chart-container-pies">
      <Pie redraw data={data} />
    </div>
  );
}
