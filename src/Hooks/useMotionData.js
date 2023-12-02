import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server URL

const useMotionData = () => {
  const [detects, setDetects] = useState([]);

  useEffect(() => {
    // Fetch initial data
    fetch('/getDetects')
      .then((response) => response.json())
      .then((data) => setDetects(data))
      .catch((error) => console.error('Error fetching data:', error));

    // Listen for real-time updates
    socket.on('dataUpdated', (updatedData) => {
      setDetects(updatedData);
    });

    return () => {
      // Clean up event listeners when the component unmounts
      socket.disconnect();
    };
  }, []);

  return {
    detects,
  }
};

export default useMotionData;
