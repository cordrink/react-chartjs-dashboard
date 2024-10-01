import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import fullData from "../../context/fulldata";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function BarChart() {
  const data = {
    labels: ["jav/Fev", "Mar/Avr", "Mai/Ju", "Jui/Aout", "Sep/Oct", "Nov/Dec"],
    datasets: [
      {
        axis: "y",
        label: "Chiffres bimestriels",
        data: fullData["2020"].chart1,
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
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 20,
          },
        },
      ],
    },
    // remove box
    legend: {
      labels: {
        boxWidth: 0,
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar redraw={true} data={data} options={options} />
    </div>
  );
}
