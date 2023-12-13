import { useEffect, useState } from 'react';
import axios from 'axios';

const useMotionData = () => {
  const [motionData, setMotionData] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to handle error state
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Make a GET request to the API endpoint
      const response = await axios.get('http://34.88.237.151:3000/motdetect/getDetects');

      // Update the motionData state with the fetched motionData
      setMotionData(response.data);
      console.log(response.data);
    } catch (error) {
      // Update the error state if an error occurs
      setError(error);
    } finally {
      // Set loading to false after the request is complete
      setLoading(false);
    }
  } 

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
      console.log("fetching data");
    }, 5000);
  

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
    
  }, []);

  return { motionData, loading, error };
};

export default useMotionData;
