import { BiVideoPlus } from "react-icons/bi";
import { MdVideocam } from "react-icons/md";

function UploadVideoBtn({
  isVideoNavOpened,
  setIsVideoNavOpened,
  setIsNotificationsOpened,
}) {
  const handleClick = () => {
    setIsNotificationsOpened(false);
    setIsVideoNavOpened(!isVideoNavOpened);
  };
  return (
    <div className="videoContainer">
      <button className="UploadVideoBtn" title="Create" onClick={handleClick}>
        {isVideoNavOpened ? <MdVideocam /> : <BiVideoPlus />}
      </button>
      {isVideoNavOpened && (
        <nav className="videosNav">
          <a href="somewhere">Upload video</a>
          <a href="somewhere">Go live</a>
        </nav>
      )}
    </div>
  );
}

export default UploadVideoBtn;
