import React, { useState, useEffect } from 'react';
import useNotification from '../Hooks/useNotifications';
import LightNotification from "../Assets/Light.png";
import tempNotification from "../Assets/Temp.png";
import humidityNotification from "../Assets/Humidity.png";

const NotificationCard = () => {
  const [refreshCount, setRefreshCount] = useState(0);
  const notifications = useNotification();
  const [visibleNotifications, setVisibleNotifications] = useState([]);
  console.log('Initial notifications:', notifications);
  const refreshNotifications = () => {
    setRefreshCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    console.log('Fetching data...');
  
    //refresh data every 10 seconds
    const fetchDataInterval = setInterval(async () => {
      await refreshNotifications(); // This triggers a re-render and updates visible notifications
      console.log('Fetching new data...', notifications); // Log the fetched data
    }, 10 * 1000);
  
    // Clean up the interval
    return () => clearInterval(fetchDataInterval);
  }, []); // Empty dependency array so the effect runs only one time
  
  useEffect(() => {
    const limitedNotifications = notifications.slice(0, 3);
    setVisibleNotifications(limitedNotifications);
  }, [notifications, refreshCount]);
  
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <div className="mb-4 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={refreshNotifications}>
          Refresh
        </button>

      </div>
      {visibleNotifications.map((notification, index) => (
        <div key={index} className="bg-white/40 shadow-xl flex flex-col mb-4 p-4 rounded-3xl">
          <h2 className="text-md text-center mb-2">{notification.artefactName}</h2>
          <div className="flex items-center mt-2">
            <div className="mr-2">
              {notification.warning.includes('Temperature') && (
                <div className="mb-2 flex items-center">
                  <img 
                    src={tempNotification}
                    alt="tempNotification"
                    className="w-8 h-8 transition-transform transform hover:scale-110"
                  />
                  <div className="mt-2 ml-2">
                    <span className="text-xs">{notification.temperature}</span>
                  </div>
                </div>
              )}
              {notification.warning.includes('Humidity') && (
                <div className="mb-2 flex items-center">
                  <img
                    src={humidityNotification}
                    alt="humidityNotification"
                    className="w-8 h-8 transition-transform transform hover:scale-110"
                  />
                  <div className="mt-2 ml-2">
                    <span className="text-xs">{notification.humidity}</span>
                  </div>
                </div>
              )}
              {notification.warning.includes('Light') && (
                <div className="mb-2 flex items-center">
                  <img
                    src={LightNotification}
                    alt="LightNotification"
                    className="w-8 h-8 transition-transform transform hover:scale-110"
                  />
                  <div className="mt-2 ml-2">
                    <span className="text-xs bg-blue-100">{notification.light}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-2">
              {notification.warning}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationCard;
