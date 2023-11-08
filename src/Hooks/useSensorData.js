import { useEffect, useState } from "react";
import axios from "axios";

const useSensorData = () => {
  const [sensorData, setSensorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:3000/api/getAll"; // Replace with your API endpoint URL

  const fetchData = () => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        console.log(response.data[0].age);
        setSensorData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching sensor data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component is mounted

  return {
    sensorData,
    isLoading,
    fetchData,
  };
};

export default useSensorData;
