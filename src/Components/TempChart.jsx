// import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./TempChart.css";
// import faker from 'faker';

// ChartJS.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
// ChartJS.defaults.global.legend.display = false;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  scales: {
    y: {
      suggestedMin: 15,
      display: false,
      suggestedMax: 40,
      color: "#fff",
    },
    x: {
      // display: false,
      border: {
        display: false,
        width: 10,
      },
      grid: {
        display: true,
        drawBorder: false,
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#fff",
        // display: false,
        font: {
          family: '"Fira Sans", sans-serif',
          weight: 600,
          size: 15,
        },
      },
    },
  },
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleFont: {
        family: '"Fira Sans", sans-serif',
        size: 15,
      },
      bodyFont: {
        family: '"Fira Sans", sans-serif',
        size: 15,
      },
      padding: 20,
      caretSize: 10,
      displayColors: false,
      // callback: {
      //   label: function (Tooltip) {
      //     return Tooltip + "ff";
      //   },
      // },
      // titleColor: "#000"
    },
    legend: {
      display: true,
      position: "bottom",
      title: {
        display: false,
        text: "Yes",
        color: "#000",
      },
      strokeStyle: "#000",
      labels: {
        color: "#fff",
        padding: 20,
        font: {
          family: '"Fira Sans", sans-serif',
          weight: 600,
          size: 25,
        },
        pointStyle: "line",
        usePointStyle: true,
        pointStyleWidth: 0.001,
      },
    },
    title: {
      display: false,
      text: "Weather Chart",
    },
  },
  // animations: {
  //   tension: {
  //     duration: 1000,
  //     easing: 'linear',
  //     from: 1,
  //     to: 0,
  //     loop: true
  //   }
  // },
};

const labels = [
  "00:00",
  "03:00",
  "06:00",
  "09:00",
  "12:00",
  "15:00",
  "18:00",
  "21:00",
  "24:00",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      tension: 0.35,
      label: "Temperature (°C) ",
      data: [24.0, 22.5, 20.7, 25.2, 35.7, 37.9, 31.8, 27.0, 24.6],
      borderColor: "rgba(73, 133, 224, 1)",
      backgroundColor: "rgba(73, 133, 224, 0.5)",
      borderWidth: 5,
      // stepped: true,
      radius: 3,
      hoverRadius: 10,
      hitRadius: 100,
      pointStyle: "circle",
      color: "#fff",
    },
    // {
    //   fill: true,
    //   tension: 0.35,
    //   label: "Humidity",
    //   data: [21.0, 22, 24, 20, 13, 12, 17, 19, 26],
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

const TempChart = () => {
  return (
    <div className="temp-chart">
      <Line options={options} data={data} />
    </div>
  );
};

export default TempChart;
