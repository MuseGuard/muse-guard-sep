import { useEffect, useState } from "react";
import axios from "axios";

const useMotionData = () => {
  const [motionSensorData, setMotionSensorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:3000/motion/getMotion"; 

  const fetchMotionData = () => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        setMotionSensorData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching motion data:", error);
      });
  };

  const updateMotionData = (detection) => {
    setIsLoading(true);

    axios
      .patch(url, { detection })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error updating motion data:", error);
      });
  };

  useEffect(() => {
    // Fetch data when the component is mounted
    fetchMotionData();

    // Set up an interval to fetch data every 5 seconds
    const intervalId = setInterval(() => {
      fetchMotionData();
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return {
    motionSensorData,
    isLoading,
    fetchMotionData,
    updateMotionData,
  };
};

export default useMotionData;
