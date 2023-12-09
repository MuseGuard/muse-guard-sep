import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { Chart, registerables } from "chart.js";
import { format } from 'date-fns';

Chart.register(...registerables);

const useHumidityData = () => {
  const [humiditySensorData, sethumiditySensorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://34.88.237.151/humid/getHumidities"; // Replace with your API endpoint URL

  const humidityData = () => {
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

  const fetchHumidityLastNValues = () => {
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

  const humidityChart = {
    labels: humiditySensorData ? humiditySensorData.map((data) => format(new Date(data.time), 'HH:mm:ss')) : [],
    datasets: [
      {
        label: "Sensor Data",
        data: humiditySensorData ? humiditySensorData.map((data) => data.measurment) : [],
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
