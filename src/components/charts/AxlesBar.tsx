import useFetchData from "../hooks/UseAxios";
import {
  Chart,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
Chart.register(Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

Chart.defaults.plugins.legend.position = "bottom";

const AxlesBar = () => {
  const { vehicles } = useFetchData();

  const axles2 = vehicles.filter((vehicle) => vehicle.axles === 2).length;
  const axles3 = vehicles.filter((vehicle) => vehicle.axles === 3).length;
  const axles4 = vehicles.filter((vehicle) => vehicle.axles === 4).length;
  const axles5 = vehicles.filter((vehicle) => vehicle.axles === 5).length;
  const axles6 = vehicles.filter((vehicle) => vehicle.axles === 6).length;

  const data = {
    labels: ["Axles: 2", "Axles: 3", "Axles: 4", "Axles: 5", "Axles: 6"],
    datasets: [
      {
        data: [axles2, axles3, axles4, axles5, axles6],
        backgroundColor: [
          "#ffa600",
          "#b7d662",
          "#955196",
          "#ff6e54",
          "#444e86",
          "#444e86",
          "#003f5c",
        ],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        backgroundColor: "#555",
        usePointStyle: true,
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div id="bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default AxlesBar;
