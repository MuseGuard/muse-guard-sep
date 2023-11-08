import React from "react";
import useSensorData from "../Hooks/useSensorData";

const SensorData = () => {
    const { sensorData, isLoading, fetchData } = useSensorData();

    const handleRefreshClick = () => {
        fetchData(); 
    };

    return (
        <div>
            <h2>Sensor Data</h2>
            {isLoading ? (
                <p>Loading sensor data...</p>
            ) : (
                <div>
                    {sensorData ? (
                        <div>
                            <p>Sensor Value: {sensorData.value}</p>
                            {/* Replace 'value' with the actual property name you have in your data */}
                        </div>
                    ) : (
                        <p>No data available.</p>
                    )}
                    <button onClick={handleRefreshClick}>Refresh</button>
                </div>
            )}
        </div>
    );
};

export default SensorData;