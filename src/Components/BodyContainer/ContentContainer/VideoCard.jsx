function VideoCard({ video }) {
  // Function Tht I found On StackOverfllow And It is Related To The <<WebPack>>
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }

  // Return Object Of All Thumbnails
  const thumbnails = importAll(
    require.context(
      "../../../data/Videos/Thumbnails",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  // Return Object Of All Logos
  const logos = importAll(
    require.context(
      "../../../data/Videos/ChannelProfile",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <div className="videoCard">
      <div className="imageThumbnail">
        <img src={thumbnails[video.thumbnail]} alt="" />
        <span className="time">{video.duration}</span>
      </div>
      <div className="textContainer">
        <img src={logos[video.logoProfile]} alt="Logo" />
        <div className="text">
          <h2 className="videoTitle">{video.title}</h2>

          <h5 className="channelName">{video["channel-name"]}</h5>
          <div className="textBottom">
            <span>{video.views}</span>
            <span className="uploadTime">3 weeks ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
