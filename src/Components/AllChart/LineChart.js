import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);

export default function LineChart({ dataLine, name }) {
  const data = {
    labels: [
      dataLine[0],
      dataLine[1],
      dataLine[2],
      dataLine[3],
      dataLine[4],
      dataLine[5],
    ],
    datasets: [
      {
        label: "stat",
        data: dataLine,
        backgroundColor: ["rgba(255, 99, 132, 0.8)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
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
      <Line redraw={true} data={data} options={options} />
    </div>
  );
}
