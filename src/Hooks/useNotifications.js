
import { useState, useEffect } from 'react';
import Axios from 'axios';

const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/Warning/getWarnings')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
  }, []);

  return notifications;
};

export default useNotification;
