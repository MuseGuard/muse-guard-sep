import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { Chart, registerables } from "chart.js";
import { format } from 'date-fns';

Chart.register(...registerables);

const useLightData = () => {
  const [lightSesnorData, setlightSesnorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://34.88.237.151:3000/light/getLightLevels"; // Replace with your API endpoint URL

  const lightData = () => {
    //setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setlightSesnorData(response.data);

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching sensor data:", error);
      });
  };

  const fetchLightLastNValues = (n) => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setlightSesnorData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error Fetching last N values of sensor data:", error);
      });
  };

  useEffect(() => {
    // Fetch data when the component is mounted
    lightData();

    // Set up an interval to fetch data every 5 seconds
    const intervalId = setInterval(() => {
      lightData();
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  // Fetch data when the component is mounted

  const lightChart = {
    labels: lightSesnorData ? lightSesnorData.map((data) => format(new Date(data.time), 'HH:mm:ss')) : [],
    datasets: [
      {
        label: "Sensor Data",
        data: lightSesnorData
          ? lightSesnorData.map((data) => data.lightLevel)
          : [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return {
    lightSesnorData,
    isLoading,
    lightData,
    fetchLightLastNValues,
    lightChart,
    LineChart: <Line data={lightChart} />,
  };
};

export default useLightData;
