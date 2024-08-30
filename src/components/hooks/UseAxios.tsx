import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  interface Vehicle {
    timestamp: string;
    classification: string;
    axles: number;
    height: number;
  }

  const client = axios.create({
    baseURL: "http://44.222.172.90:8080",
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
        const response = await client.get<Vehicle[]>("/getData");
        console.log("Vehicles Fetched");
        setVehicles(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return {
    vehicles,
    loading,
    formatDate,
  };
};

export default useFetchData;
