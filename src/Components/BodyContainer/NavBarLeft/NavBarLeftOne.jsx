import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
} from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";

function NavBarLeftOne() {
  const navBarLeftOne = [
    { id: 1, icon: <MdHomeFilled />, title: "Home" },
    { id: 2, icon: <MdOutlineExplore />, title: "Explore" },
    { id: 3, icon: <FaPhotoVideo />, title: "Shorts" },
    { id: 4, icon: <MdOutlineSubscriptions />, title: "Subscriptions" },
  ];

  return (
    <article className="navBarLeftOne">
      {navBarLeftOne.map((item) => {
        return (
          <div
            key={item.id}
            title={item.title}
            className={item.id === 1 ? "card active" : "card"}
          >
            {item.icon}
            <span>
              {item.title.length > 20
                ? `${item.title.slice(0, 20)} ...`
                : item.title}
            </span>
          </div>
        );
      })}
    </article>
  );
}

export default NavBarLeftOne;
