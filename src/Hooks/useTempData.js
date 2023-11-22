import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const useTempData = () => {
  const [tempSensorData, settempSensorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:3000/temp/getTemperatures"; // Replace with your API endpoint URL

  const tempData = () => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        settempSensorData(response.data);

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching sensor data:", error);
      });
  };

  const fetchTempLastNValues = (n) => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        settempSensorData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error Fetching last N values of sensor data:", error);
      });
  };

  useEffect(() => {
    // Fetch data when the component is mounted
    tempData();

    // Set up an interval to fetch data every 5 seconds
    const intervalId = setInterval(() => {
      tempData();
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  // Fetch data when the component is mounted

  const tempChart = {
    labels: tempSensorData ? tempSensorData.map((data) => data.time) : [],
    datasets: [
      {
        label: "Sensor Data",
        data: tempSensorData
          ? tempSensorData.map((data) => data.temperature)
          : [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return {
    tempSensorData,
    isLoading,
    tempData,
    fetchTempLastNValues,
    tempChart,
    LineChart: <Line data={tempChart} />,
  };
};

export default useTempData;
