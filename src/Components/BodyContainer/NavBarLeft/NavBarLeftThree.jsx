import { SiYoutubegaming } from "react-icons/si";
import { MdSportsSoccer } from "react-icons/md";

function NavBarLeftThree() {
  const navBarLeftThree = [
    { id: 1, icon: <SiYoutubegaming />, title: "Gaming" },
    { id: 2, icon: <MdSportsSoccer />, title: "Sports" },
  ];
  return (
    <article className="explore">
      <h2 className="articleTitle">Explore</h2>
      {navBarLeftThree.map((item) => {
        return (
          <div className="card" title={item.title} key={item.id}>
            {item.icon}
            <span>{item.title}</span>
          </div>
        );
      })}
    </article>
  );
}

export default NavBarLeftThree;
