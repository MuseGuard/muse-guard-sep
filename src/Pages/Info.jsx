// import React from "react";
// import useSensorData from "../Hooks/useSensorData";
// import { Line } from "react-chartjs-2";
// import { useState } from "react";
// import { useEffect } from "react";
// import '../Styles/Info.css';
// import FakeTest from "../Hooks/FakeTest";

// const Info = () => {
//     const { sensorData, isLoading, fetchData, LineChart, fetchLastNValue } = FakeTest();

//     const [showLastNValues, setShowLastNValues] = useState(false);

//     const handleRefreshClick = () => {
//         fetchData();
//         setShowLastNValues(false);
//     };

//     const handleLastNValuesClick = () => {
//         fetchLastNValue(10);
//         setShowLastNValues(true);
//     }

//     useEffect(() => {
//         // Cleanup the previous chart instance when the component unmounts
//         return () => {
//             if (LineChart && LineChart.chartInstance) {
//                 LineChart.chartInstance.destroy();
//             }
//         };
//     }, [LineChart]);

//     return (
//         <div className="info-container">
//             <h2>Sensor Data</h2>
//             {isLoading ? (
//                 <p>Loading sensor data...</p>
//             ) : (
//                 <div>
//                     {sensorData ? (
//                         <div>
//                             <p>Sensor Value: {sensorData}</p>
//                             {/* Replace 'age' with the actual property name you have in your data */}
//                         </div>
//                     ) : (
//                         <p>No data available.</p>
//                     )}

//                     <button onClick={handleRefreshClick}>Refresh</button>
//                     <button onClick={handleLastNValuesClick}>Show Last 10 Values</button>

//                     {showLastNValues && (
//                         <div className="chart-container">
//                             {/* Adjust chart styling based on your requirements */}
//                             <Line
//                                 data={LineChart.props.data}
//                                 options={{
//                                     responsive: true,
//                                     maintainAspectRatio: false,
//                                 }}
//                             />
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Info;

import React, { useState } from "react";
import useSensorData from "../Hooks/useSensorData";
import { Line } from "react-chartjs-2";
import "../Styles/Info.css";
import FakeTest from "../Hooks/FakeTest";

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
    <div className="info-container">
      <h2>Sensor Data</h2>
      {isLoading ? (
        <p>Loading sensor data...</p>
      ) : (
        <div>
          {sensorData ? (
            <div>
              <p>Sensor Value: {sensorData[0].value}</p>
              {/* Replace 'value' with the actual property name you have in your data */}
            </div>
          ) : (
            <p>No data available.</p>
          )}

          <button onClick={handleRefreshClick}>Refresh</button>
          <button onClick={handleLastNValuesClick}>Show Last 10 Values</button>

          {showLastNValues && (
            <div className="chart-container">
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      type: "linear", // Use 'linear' for numeric data on X-axis
                    },
                  },
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Info;
