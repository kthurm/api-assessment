import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Register the required components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

// Define the type for your chart data
interface BarChartData {
  labels: string[];
  datasets: {
    label: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    data: number[];
  }[];
}

// Define the type for your chart options
interface BarChartOptions extends ChartOptions<"bar"> {}

// Define the BarChart component
const BarChart: React.FC = () => {
  // Define the chart data
  const data: BarChartData = {
    labels: ["Axles 2", "Axles 3", "Axles 4", "Axles 5", "Axles 6"],
    datasets: [
      {
        label: "",
        backgroundColor: "#999",
        borderColor: "#333",
        borderWidth: 1,
        data: [30, 5, 40, 15, 10],
      },
    ],
  };

  // Define the chart options
  const options: BarChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
