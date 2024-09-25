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

const OccupantBar = () => {
  const { vehicles } = useFetchData();

  const occupant1 = vehicles.filter(
    (vehicle) => vehicle.occupants === 1
  ).length;
  const occupant2 = vehicles.filter(
    (vehicle) => vehicle.occupants === 2
  ).length;
  const occupant3 = vehicles.filter(
    (vehicle) => vehicle.occupants === 3
  ).length;
  const occupant4 = vehicles.filter(
    (vehicle) => vehicle.occupants === 4
  ).length;
  const occupant5 = vehicles.filter(
    (vehicle) => vehicle.occupants === 5
  ).length;
  const occupant6 = vehicles.filter(
    (vehicle) => vehicle.occupants === 6
  ).length;

  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Number of Occupants",
        data: [
          occupant1,
          occupant2,
          occupant3,
          occupant4,
          occupant5,
          occupant6,
        ],
        backgroundColor: "#955196",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,

    plugins: {
      legend: {
        dislpay: false,
      },
      tooltip: {
        backgroundColor: "#555",
        usePointStyle: true,
      },
      subtitle: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="lg:w-[500px] xl:w-[600px] mt-10 xl:mt-20" id="bar-chart">
      <h1 className="text-center font-bold text-xl text-primary pb-5">
        Occupant Snapshot
      </h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default OccupantBar;
