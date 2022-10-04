import NavBarLeft from "./NavBarLeft/NavBarLeft";
import ContentContainer from "./ContentContainer/ContentContainer";

function Body({ isNavBarLeftOpened }) {
  return (
    <div className="bodyContainer">
      <NavBarLeft isNavBarLeftOpened={isNavBarLeftOpened} />
      <ContentContainer isNavBarLeftOpened={isNavBarLeftOpened} />
    </div>
    // <div
    //   className="bodyContainer"
    //   style={{
    //     gridTemplateColumns: isNavBarLeftOpened ? "280px 1fr" : "0 1fr",
    //   }}
    // >
    //   <NavBarLeft isNavBarLeftOpened={isNavBarLeftOpened} />
    //   <ContentContainer isNavBarLeftOpened={isNavBarLeftOpened} />
    // </div>
  );
}

export default Body;
