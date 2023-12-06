import NotificationCard from "./NotficationCard";
import warningIcon from "../Assets/warning.png";
import '../Styles/Animation.css';
import React, { useState } from 'react';

const Notifications = () => {
  const [isShaking, setShaking] = useState(true);

  const handleShakeClick = () => {
    setShaking(!isShaking);
  };

  return (
    <div className="flex flex-col items-center px-4 py-4 bg-black/40 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 space-y-5">
      <h1 className="text-5xl">Notifications</h1>
      <img
        src={warningIcon}
        alt="warningIcon"
        className={`w-10 h-10 transition-transform transform hover:scale-110 ${isShaking ? 'animate-WarningIcon' : ''}`}
        onClick={handleShakeClick}
      />
      <NotificationCard />
    </div>
  );
};

export default Notifications;
