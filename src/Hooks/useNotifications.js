
import { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';

const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchData = async () => {
    axios.get('http://localhost:3000/Warning/getWarnings')
      .then(response => {
        console.log('Notifications:', response.data);
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
