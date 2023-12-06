// NotCard.js
import React, { useState, useEffect } from 'react';
import useNotification from '../Hooks/useNotifications';
import LightNotification from '../Assets/Light.png';
import tempNotification from '../Assets/Temp.png';
import humidityNotification from '../Assets/Humidity.png';

const NotCard = () => {
    const [refreshCount, setRefreshCount] = useState(0);
    const [showOldData, setShowOldData] = useState(false);
    const { notifications, fetchData } = useNotification();
    const [visibleNotifications, setVisibleNotifications] = useState([]);

    const refreshNotifications = () => {
        setShowOldData(false);
        setRefreshCount((prevCount) => prevCount + 1);
        fetchData(); 
    };

    const rewindNotifications = () => {
        setShowOldData(true);
    };

    useEffect(() => {
        const limitedNotifications = showOldData ? notifications.slice(3, 6) : notifications.slice(0, 3);
        setVisibleNotifications(limitedNotifications);
    }, [notifications, refreshCount, showOldData]);

    return (
        <div>
            <div className="mb-4 flex justify-center space-x-4">
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={rewindNotifications}
                >
                    Rewind
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={refreshNotifications}
                >
                    Refresh
                </button>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
                {visibleNotifications.map((notification) => (
                    <div key={notification.artefactId} className="bg-white/40 rounded-xl w-[300px] p-4 mb-4 flex flex-col">
                        <div className="flex items-center justify-center space-x-2">
                            <h2>{notification.artefactName}</h2>
                        </div>

                        <div className="flex items-center justify-center space-y-2">
                            {/* Render icon based on warning type */}
                            {notification.warning.includes('Temperature') && (
                                <img src={tempNotification} alt="Temperature Warning" />
                            )}
                            {notification.warning.includes('Humidity') && (
                                <img src={humidityNotification} alt="Humidity Warning" />
                            )}
                            {notification.warning.includes('Light levels') && (
                                <img src={LightNotification} alt="Light Warning" />
                            )}
                        </div>


                        <span>{notification.warning}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotCard;
