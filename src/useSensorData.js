import { useEffect, useState } from "react";

const useSensorData = (url) => {
    const [sensorData, setSensorData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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

    useEffect(() => {
        fetchData(); // Fetch initial data
    }, [url]);

    return {
        sensorData,
        isLoading,
        fetchData, // Add a function to fetch data
    };
};

export default useSensorData;
