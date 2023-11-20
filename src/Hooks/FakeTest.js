import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const FakeTest = () => {
  const [sensorData, setSensorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chartInstance, setChartInstance] = useState(null);

  const generateFakeData = (count) => {
    return Array.from({ length: count }, (_, index) => ({
      timestamp: index, // Assuming timestamps are sequential numbers
      value: Math.random() * 30 + 20, // Generate random temperature values between 20 and 50
    }));
  };

  const fetchData = () => {
    setIsLoading(true);
    const fakeData = generateFakeData(10);
    setSensorData(fakeData);
    setIsLoading(false);
  };

  const fetchLastNValue = (n) => {
    setIsLoading(true);
    const fakeLastNData = generateFakeData(n);
    setSensorData(fakeLastNData);

    // Destroy the previous chart instance if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();

    // Clean up the chart instance when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // Fetch data when the component is mounted

  const chartData = {
    labels: sensorData ? sensorData.map((data) => data.timestamp) : [],
    datasets: [
      {
        label: "Sensor Data",
        data: sensorData ? sensorData.map((data) => data.value) : [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "linear",
      },
    },
  };

  return {
    sensorData,
    isLoading,
    fetchData,
    fetchLastNValue,
    chartData,
    LineChart: (
      <Line
        data={chartData}
        options={lineChartOptions}
        ref={(chart) => setChartInstance(chart ? chart.chartInstance : null)}
      />
    ),
  };
};

export default FakeTest;
