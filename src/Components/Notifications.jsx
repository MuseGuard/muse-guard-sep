import NotificationCard from "./NotficationCard";

const Notifications = () => {
  return (
    <div className="flex flex-col items-center px-4 py-4 bg-black/40 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 space-y-5">
      <h1 className="text-5xl">Notifications</h1>
      <NotificationCard />
    </div>
  );
};

export default Notifications;
