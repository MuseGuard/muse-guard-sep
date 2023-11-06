import { useEffect, useState } from "react";

const useSensorData = () => {
    const [sensorData, setSensorData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const url = ''

    const fetchData = () => {
        setIsLoading(true);

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setSensorData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error("Error fetching sensor data:", error);
            });
    };


    return {
        sensorData,
        isLoading,
        fetchData, 
    };
};

export default useSensorData;
