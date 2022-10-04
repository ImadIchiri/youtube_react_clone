import { AiOutlineSetting, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlinedFlag } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";

function NavBarLeftFour() {
  const navBarLeftFour = [
    { id: 1, icon: <AiOutlineSetting />, title: "Settings" },
    { id: 2, icon: <MdOutlinedFlag />, title: "Report history" },
    { id: 3, icon: <AiOutlineQuestionCircle />, title: "Help" },
    { id: 4, icon: <RiFeedbackLine />, title: "Send feedback" },
  ];
  return (
    <article>
      {navBarLeftFour.map((item) => {
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

export default NavBarLeftFour;
