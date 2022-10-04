import { useState } from "react";
import Subscriptions from "../../../data/Content/Channels.json";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function NavBarLeftSubscriptions() {
  const [subscriptionClosed, setSubcriptionClosed] = useState(true);

  // Function Tht I found On StackOverfllow And It is Related To The <<WebPack>>
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }

  // Return Object Of All Logos
  const logos = importAll(
    require.context(
      "../../../data/Videos/ChannelProfile",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <article className="subscriptions">
      <h2 className="articleTitle">Subscriptions</h2>
      {Subscriptions.map((item) => {
        return (
          <div
            key={item.id}
            className="channelCard"
            title={item["channel-name"]}
          >
            <img src={logos[item.logoProfile]} alt="Channel Logo" />
            <h3>
              {item["channel-name"].length > 18
                ? `${item["channel-name"].slice(0, 18)} ...`
                : item["channel-name"]}
            </h3>
          </div>
        );
      })}

      {subscriptionClosed ? (
        <div className="card" onClick={() => setSubcriptionClosed(false)}>
          <MdKeyboardArrowDown />
          <span>Show 287 more</span>
        </div>
      ) : (
        <div className="card" onClick={() => setSubcriptionClosed(true)}>
          <MdKeyboardArrowUp />
          <span>Show less</span>
        </div>
      )}
    </article>
  );
}

export default NavBarLeftSubscriptions;
