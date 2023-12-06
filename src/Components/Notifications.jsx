import React from "react";
import NotificationCard from "./NotificationCard";

const Notifications = () => {
  return (
    <div className="flex flex-col items-center px-4 py-4 bg-black/20 w-full md:w-1/4  space-y-5 rounded-xl">
      <h1 className="text-5xl">Notifications</h1>
      <NotificationCard/>
    </div>
  );
};

export default Notifications;
