import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const useHumidityData = () => {
  const [humiditySensorData, sethumiditySensorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:3000/temp/getTemperatures"; // Replace with your API endpoint URL

  const humidityData = () => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        sethumiditySensorData(response.data);

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching sensor data:", error);
      });
  };

  const fetchHumidityLastNValues = (n) => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        sethumiditySensorData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error Fetching last N values of sensor data:", error);
      });
  };

  useEffect(() => {
    // Fetch data when the component is mounted
    humidityData();

    // Set up an interval to fetch data every 5 seconds
    const intervalId = setInterval(() => {
      humidityData();
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  // Fetch data when the component is mounted

  const humidityChart = {
    labels: humiditySensorData ? humiditySensorData.map((data) => data.time) : [],
    datasets: [
      {
        label: "Sensor Data",
        data: humiditySensorData
          ? humiditySensorData.map((data) => data.temperature)
          : [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return {
    humiditySensorData,
    isLoading,
    humidityData,
    fetchHumidityLastNValues,
    humidityChart,
    LineChart: <Line data={humidityChart} />,
  };
};

export default useHumidityData;
