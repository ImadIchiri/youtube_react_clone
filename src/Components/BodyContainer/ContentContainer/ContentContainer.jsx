import ContentHeader from "./ContentHeader";
import Content from "./Content";

function ContentContainer({ isNavBarLeftOpened }) {
  return (
    <div className="contentContainer">
      <ContentHeader />
      <Content />
    </div>
  );
}

export default ContentContainer;
