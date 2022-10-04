import NotificationsList from "./NotificationsList";
import { FiSettings } from "react-icons/fi";
import { FaBell, FaRegBell } from "react-icons/fa";

function NotificationsBtn({
  isNotificationsOpened,
  setIsNotificationsOpened,
  setIsVideoNavOpened,
}) {
  const handleClick = () => {
    setIsVideoNavOpened(false);
    setIsNotificationsOpened(!isNotificationsOpened);
  };

  return (
    <div className="NotificationsContainer">
      <button
        className="NotificationsBtn"
        title="Notifications"
        onClick={handleClick}
      >
        {isNotificationsOpened ? <FaBell /> : <FaRegBell />}
      </button>

      {isNotificationsOpened && (
        <div className="Notifications">
          <div className="NotificationsHeader">
            <h3>Notifications</h3>
            <FiSettings />
          </div>

          <NotificationsList />
        </div>
      )}
    </div>
  );
}

export default NotificationsBtn;
