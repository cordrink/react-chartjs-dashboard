import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(...registerables);

export default function BarChart( {dataBar, name}) {
  const data = {
    labels: ["Jan/Fev", "Mar/Avr", "Mai/Ju", "Jui/Aout", "Sep/Oct", "Nov/Dec"],
    datasets: [
      {
        label: "stat",
        data: dataBar,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: name,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 20,
        ticks: {
          stepSize: 1,
          color: "green",
          font: {
            family: "jetbrains Mono",
            size: 10,
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar redraw={true} data={data} options={options} />
    </div>
  );
}
