import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";

function NavBartLeftShortAside() {
  const shortAside = [
    { id: 1, icon: <MdHomeFilled />, title: "Home" },
    { id: 2, icon: <MdOutlineExplore />, title: "Explore" },
    { id: 3, icon: <FaPhotoVideo />, title: "Shorts" },
    { id: 4, icon: <MdOutlineSubscriptions />, title: "Subscriptions" },
    { id: 5, icon: <MdOutlineVideoLibrary />, title: "Library" },
  ];
  return (
    <aside className="shortAside">
      {shortAside.map((item) => {
        return (
          <div key={item.id} className="card" title={item.title}>
            {item.icon}
            <span>
              {item.title.length > 20
                ? `${item.title.slice(0, 20)} ...`
                : item.title}
            </span>
          </div>
        );
      })}
    </aside>
  );
}

export default NavBartLeftShortAside;
