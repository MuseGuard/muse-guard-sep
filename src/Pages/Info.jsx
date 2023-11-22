
import React from "react";
import { Button, Typography, CircularProgress, Paper } from "@mui/material";
import { Line } from "react-chartjs-2";
import useTempData from "../Hooks/useTempData";
import useHumidityData from "../Hooks/useHumidityData";
import useLightData from "../Hooks/useLightData";
import "../Styles/Info.css";

const SensorSection = ({ title, isLoading, sensorData, chartData, onRefreshClick, onLastNValuesClick }) => {
  return (
    <div className="sensor-section">
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {sensorData && sensorData.length > 0 ? (
            <div>
              <Typography variant="body1" className="sensor-info">
                Sensor Value: {sensorData[0].temperature || sensorData[0].measurment || sensorData[0].lightLevel}
              </Typography>
              <div className="button-container">
                <Button variant="contained" className="refresh-button" onClick={onRefreshClick}>
                  Refresh
                </Button>
                <Button variant="contained" className="lastNValues-button" onClick={onLastNValuesClick}>
                  Show Last 10 Values
                </Button>
              </div>
            </div>
          ) : (
            <Typography variant="body1">No data available.</Typography>
          )}
          {sensorData && sensorData.length > 0 && (
            <div className="chart-container">
              <Line data={chartData} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Info = () => {
  const {
    tempSensorData,
    isLoading: isLoadingTemp,
    tempData,
    fetchTempLastNValues,
    tempChart,
  } = useTempData();

  const {
    humiditySensorData,
    isLoading: isLoadingHumidity,
    humidityData,
    fetchHumidityLastNValues,
    humidityChart,
  } = useHumidityData();

  const {
    lightSesnorData,
    isLoading: isLoadingLight,
    lightData,
    fetchLightLastNValues,
    lightChart,
  } = useLightData();

  return (
    <Paper elevation={3} className="info-container">
      <Typography variant="h4" gutterBottom>
        Sensor Data
      </Typography>

      <SensorSection
        title="Temperature Sensor"
        isLoading={isLoadingTemp}
        sensorData={tempSensorData}
        chartData={tempChart}
        onRefreshClick={tempData}
        onLastNValuesClick={() => fetchTempLastNValues(10)}
      />

      <SensorSection
        title="Humidity Sensor"
        isLoading={isLoadingHumidity}
        sensorData={humiditySensorData}
        chartData={humidityChart}
        onRefreshClick={humidityData}
        onLastNValuesClick={() => fetchHumidityLastNValues(10)}
      />

      <SensorSection
        title="Light Sensor"
        isLoading={isLoadingLight}
        sensorData={lightSesnorData}
        chartData={lightChart}
        onRefreshClick={lightData}
        onLastNValuesClick={() => fetchLightLastNValues(10)}
      />
    </Paper>
  );
};

export default Info;
