import React from "react";
import { Line } from "react-chartjs-2";
import useTempData from "../Hooks/useTempData";
import useHumidityData from "../Hooks/useHumidityData";
import useLightData from "../Hooks/useLightData";
import useMotionData from "../Hooks/useMotionData";


const SensorSection = ({ title, isLoading, sensorData, chartData, onRefreshClick, onLastNValuesClick }) => {
  return (
    <div className="sensor-section">
      <h6 className="text-lg font-semibold mb-2">{title}</h6>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
        </div>
      ) : (
        <div>
          {sensorData && sensorData.length > 0 ? (
            <div>
              <p className="text-base sensor-info">
                Sensor Value: {sensorData[0].temperature || sensorData[0].measurment || sensorData[0].lightLevel}
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={onRefreshClick}>
                  Refresh
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={onLastNValuesClick}>
                  Show Last 10 Values
                </button>
              </div>
            </div>
          ) : (
            <p className="text-base">No data available.</p>
          )}
          {sensorData && sensorData.length > 0 && (
            <div className="chart-container h-[180px]">
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
    lightSesnorData, // Corrected variable name
    isLoading: isLoadingLight,
    lightData,
    fetchLightLastNValues,
    lightChart,
  } = useLightData();

  const { detects } = useMotionData();

  return (
    <div className="grid grid-cols-2 gap-2 bg-white/40 mt-5 mb-5 w-screen h-[710px] mr-8 ml-8 shadow-xl rounded-3xl animate-fade-up">
      {/* Temperature Sensor */}
      <div className="col-span-1 px-2 ">
        <SensorSection
          title="Temperature Sensor"
          isLoading={isLoadingTemp}
          sensorData={tempSensorData}
          chartData={tempChart}
          onRefreshClick={tempData}
          onLastNValuesClick={() => fetchTempLastNValues(10)}
        />
      </div>

      {/* Humidity Sensor */}
      <div className="col-span-1 px-2">
        <SensorSection
          title="Humidity Sensor"
          isLoading={isLoadingHumidity}
          sensorData={humiditySensorData}
          chartData={humidityChart}
          onRefreshClick={humidityData}
          onLastNValuesClick={() => fetchHumidityLastNValues(10)}
        />
      </div>

      {/* Light Sensor */}
      <div className="col-span-1 px-2">
        <SensorSection
          title="Light Sensor"
          isLoading={isLoadingLight}
          sensorData={lightSesnorData} // Corrected variable name
          chartData={lightChart}
          onRefreshClick={lightData}
          onLastNValuesClick={() => fetchLightLastNValues(10)}
        />
      </div>

      {/* Additional Sensor (if needed) */}
      <div className="col-span-1">
      <h2>Motion Data</h2>
      <ul>
        {detects.map((detect) => (
          <li key={detect._id}>{/* Render your detect data here */}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Info;
