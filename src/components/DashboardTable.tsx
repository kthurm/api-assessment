import { useEffect, useState } from "react";
import axios from "axios";

interface vehicle {
  timestamp: string;
  classification: string;
  axles: number;
  height: number;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toUTCString();
};

const client = axios.create({
  baseURL: "http://44.222.172.90:8080",
});

const DashboardTable = () => {
  const [vehicles, setVehicles] = useState<vehicle[]>([]);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const response = await client.get("/getData");
        console.log("Vehicles Fetched");
        setVehicles(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchVehicleData();
  }, []);

  return (
    <div className="flex flex-col text-gray-900 mt-1.5 mx-4">
      <table
        id="vehicle-data"
        className="table-auto bg-gray-100 shadow-2xl mt-1"
      >
        <thead className="text-[.6rem] uppercase text-left text-gray-500 border border-b-gray-500">
          <tr>
            <th>Time Stamp</th>
            <th>Classification</th>
            <th>Axles</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {vehicles.map((vehicle, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100 text-sm">
              <td>{formatDate(vehicle.timestamp)}</td>
              <td className="capitalize text-center">
                {vehicle.classification}
              </td>
              <td>{vehicle.axles}</td>
              <td>{vehicle.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
