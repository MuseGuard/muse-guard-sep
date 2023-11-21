import React, { useState } from "react";
import useSensorData from "../Hooks/useSensorData";
import { Line } from "react-chartjs-2";
import "../Styles/Info.css";

const Info = () => {
  const {
    sensorData,
    isLoading,
    fetchData,
    fetchLastNValue,
    chartData,
    //LineChart,
  } = useSensorData();

  const [showLastNValues, setShowLastNValues] = useState(false);

  const handleRefreshClick = () => {
    fetchData();
    setShowLastNValues(false);
  };

  const handleLastNValuesClick = () => {
    fetchLastNValue(10);
    setShowLastNValues(true);
  };

  return (
    <div className="info-container">
      <h2>Sensor Data</h2>
      {isLoading ? (
        <p>Loading sensor data...</p>
      ) : (
        <div>
          {sensorData && sensorData.length > 0 ? (
            <div>
              <p>Sensor Value: {sensorData[0].temperature}</p>
            </div>
          ) : (
            <p>No data available.</p>
          )}

          <button onClick={handleRefreshClick}>Refresh</button>
          <button onClick={handleLastNValuesClick}>Show Last 10 Values</button>

          {showLastNValues && sensorData && sensorData.length > 0 && (
            <div className="chart-container">
              {/* Separate div for Sensor Value */}
              <div className="sensor-value-container">
                <p>Sensor Value: {sensorData[0].temperature}</p>
              </div>

              {/* Separate div for the Line Chart */}
              <div className="line-chart-container">
                <Line
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        type: 'time',
                        time: {
                          unit: 'minute',
                          tooltipFormat: 'YYYY-MM-DD HH:mm:ss',
                        },
                        title: {
                          display: true,
                          text: 'Timestamp',
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: 'Temperature',
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Info;
