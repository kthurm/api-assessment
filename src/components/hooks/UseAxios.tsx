import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  interface Vehicle {
    timestamp: string;
    classification: string;
    occupants: number;
    height: number;
  }

  const client = axios.create({
    baseURL: "https://us-central1-vehicle-api-5bbbd.cloudfunctions.net",
  });
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toUTCString();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get<Vehicle[]>("/api");
        console.log("Vehicles Fetched");
        setVehicles(response.data);
        console.log(vehicles);
      } catch (error) {
        console.log("Error fetching data", error);
      }
      setLoading(false);
    };
    fetchData();
    const interval = import.meta.env.VITE_REFRESH_INTERVAL;
    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId);
  }, []);

  return {
    vehicles,
    loading,
    formatDate,
  };
};

export default useFetchData;
