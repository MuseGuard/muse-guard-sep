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
      const response = await axios.get('http://34.88.184.75:3000/motdetect/getDetects');

      console.log(response);
      // Update the motionData state with the fetched motionData
      setMotionData(response.data);
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
  }, []);

  return { motionData, loading, error };
};

export default useMotionData;
