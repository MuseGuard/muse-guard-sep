import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables)

const useSensorData = () => {
  const [sensorData, setSensorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:3000/temp/getTemperatures"; // Replace with your API endpoint URL

  const fetchData = () => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setSensorData(response.data);
        
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching sensor data:", error);
      });
  };

  const fetchLastNValue = (n) => {
    setIsLoading(true);
    axios.get(url)
    .then((response) => {
      setSensorData(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      console.error("Error Fetching last N values of sensor data:" , error);
    });
  };

  useEffect(() => {
    // Fetch data when the component is mounted
    fetchData();

    // Set up an interval to fetch data every 5 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); 
// Fetch data when the component is mounted

  const chartData = {
    labels: sensorData ? sensorData.map((data) => data.time) : [],
    datasets: [
      {
        label: "Sensor Data",
        data: sensorData ? sensorData.map((data) => data.temperature) : [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return {
    sensorData,
    isLoading,
    fetchData,
    fetchLastNValue,
    chartData,
    LineChart:<Line data={chartData}/>
  };
};

export default useSensorData;
