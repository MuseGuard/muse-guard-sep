import React, { useState, useEffect } from 'react';
import useNotification from '../Hooks/useNotifications';
import LightNotification from "../Assets/Light.png";
import tempNotification from "../Assets/Temp.png";
import humidityNotification from "../Assets/Humidity.png";

const NotificationCard = () => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [showOldData, setShowOldData] = useState(false);
  const notifications = useNotification();
  const [visibleNotifications, setVisibleNotifications] = useState([]);

  const refreshNotifications = () => {
    setShowOldData(false);
    setRefreshCount(prevCount => prevCount + 1);
  };

  const rewindNotifications = () => {
    setShowOldData(true);
  };

  useEffect(() => {
    console.log('init noti', notifications);

    const limitedNotifications = showOldData
      ? notifications.slice(3, 6) // Adjust the range based on the number of notifications you want to show
      : notifications.slice(0, 3);
    setVisibleNotifications(limitedNotifications);
  }, [notifications, refreshCount, showOldData]);

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <div className="mb-4 flex justify-center space-x-4">
        
         <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={rewindNotifications}>
          Rewind
        </button>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={refreshNotifications}>
          Refresh
        </button>

      </div>
      {visibleNotifications.map((notification, index) => (
        <div key={index} className="bg-white/40 shadow-xl flex flex-col mb-4 p-4 rounded-3xl animate-shake hover:animate-none">
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
                    <span className="text-xs">{notification.light}</span>
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
