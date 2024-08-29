import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartItem {
  label: string;
  value: number;
  color: string;
}

function VehicleDoughnut() {
  const data: ChartItem[] = [
    {
      label: "Vans",
      value: 55,
      color: "#666",
    },
    {
      label: "Bikes",
      value: 25,
      color: "#222",
    },
    {
      label: "Buses",
      value: 10,
      color: "#999",
    },
    {
      label: "Trucks",
      value: 80,
      color: "#444",
    },
  ];

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
      legend: {
        position: "top",
      },
    },
    cutout: "50%",
  };

  const finalData: ChartData<"doughnut"> = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={finalData} options={options} />;
}

export default VehicleDoughnut;
