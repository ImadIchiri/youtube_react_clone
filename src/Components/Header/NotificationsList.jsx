// import NotificationData from "../../data/Notifications/notifications.json";
import NotificationData from "../../data/Content/videos.json";
import NotificationsItem from "./NotificationsItem";

function NotificationsList() {
  return (
    <div className="NotificationsList">
      {NotificationData.map((item) => {
        return <NotificationsItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default NotificationsList;
