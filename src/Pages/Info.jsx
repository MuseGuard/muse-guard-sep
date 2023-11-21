import React, { useState } from "react";
import { Button, Typography, CircularProgress, Paper } from "@mui/material";
import { Line } from "react-chartjs-2";
import useSensorData from "../Hooks/useSensorData";
import "../Styles/Info.css";

const Info = () => {
  const {
    sensorData,
    isLoading,
    fetchData,
    fetchLastNValue,
    chartData,
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
    <Paper elevation={3} className="info-container">
      <Typography variant="h4" gutterBottom>
        Sensor Data
      </Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {sensorData && sensorData.length > 0 ? (
            <div>
              <Typography variant="body1" gutterBottom>
                Sensor Value: {sensorData[0].temperature}
              </Typography>
            </div>
          ) : (
            <Typography variant="body1">No data available.</Typography>
          )}

          <Button variant="contained" onClick={handleRefreshClick}>
            Refresh
          </Button>
          <Button variant="contained" onClick={handleLastNValuesClick}>
            Show Last 10 Values
          </Button>

          {showLastNValues && sensorData && sensorData.length > 0 && (
            <div className="chart-container">
              {/* Separate div for Sensor Value */}
              <div className="sensor-value-container">
                <Typography variant="body1">
                  Sensor Value: {sensorData[0].temperature}
                </Typography>
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
                        type: "time",
                        time: {
                          unit: "minute",
                          tooltipFormat: "YYYY-MM-DD HH:mm:ss",
                        },
                        title: {
                          display: true,
                          text: "Timestamp",
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: "Temperature",
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
    </Paper>
  );
};

export default Info;
