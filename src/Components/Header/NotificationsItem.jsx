function NotificationsItem({ item }) {
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
    require.context("../../data/Videos/Thumbnails", false, /\.(png|jpe?g|svg)$/)
  );

  // Return Object Of All Logos
  const logos = importAll(
    require.context(
      "../../data/Videos/ChannelProfile",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  return (
    <div className="NotificationsItem">
      <img className="ItemLogo" src={logos[item.logoProfile]} alt="Item Logo" />
      <div className="text">
        <h3 className="title">{item["title"]}</h3>
        <time className="uploadTime">{item["upload-time"]}</time>
      </div>
      <div className="ItemThumbnail">
        <img src={thumbnails[item.thumbnail]} alt="Item Thumbnail" />
      </div>
    </div>
  );
}

export default NotificationsItem;
