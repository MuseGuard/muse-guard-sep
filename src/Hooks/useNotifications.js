
import { useState, useEffect } from 'react';

import axios from 'axios';

const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchData = async () => {
    axios.get('http://34.88.184.75:3000/Warning/getWarnings')
      .then(response => {
      
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { notifications , fetchData};
};

export default useNotification;
