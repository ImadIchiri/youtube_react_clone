import { useState } from "react";
import {
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineWatchLater,
  MdPlaylistPlay,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";

function NavBarLeftTwo() {
  const [watchLaterClosed, setWatchLaterClosed] = useState(true);

  const navBarLeftTwo = [
    { id: 1, icon: <MdOutlineVideoLibrary />, title: "Library" },
    { id: 2, icon: <MdOutlineHistory />, title: "History" },
    { id: 3, icon: <RiVideoLine />, title: "You videos" },
    { id: 4, icon: <MdOutlineWatchLater />, title: "Watch later" },
    {
      id: 5,
      icon: <MdPlaylistPlay />,
      title: "JSON Server Tutorial for Beginners",
    },
  ];
  return (
    <article>
      {navBarLeftTwo.map((item) => {
        return (
          <div key={item.id} title={item.title} className="card">
            {item.icon}
            <span>
              {item.title.length > 20
                ? `${item.title.slice(0, 20)} ...`
                : item.title}
            </span>
          </div>
        );
      })}

      {watchLaterClosed ? (
        <div className="card" onClick={() => setWatchLaterClosed(false)}>
          <MdKeyboardArrowDown />
          <span>Show more</span>
        </div>
      ) : (
        <div className="card" onClick={() => setWatchLaterClosed(true)}>
          <MdKeyboardArrowUp />
          <span>Show less</span>
        </div>
      )}
    </article>
  );
}

export default NavBarLeftTwo;
