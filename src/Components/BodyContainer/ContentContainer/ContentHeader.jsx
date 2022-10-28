import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Categories from "../../../data/Content/Categories.json";

function ContentHeader() {
  const scrollValue = 500;

  const leftArrow = () => {
    const testScroll = document.getElementById("testScroll");
    testScroll.scrollLeft = testScroll.scrollLeft + scrollValue;
  };

  const rightArrow = () => {
    const testScroll = document.getElementById("testScroll");
    testScroll.scrollLeft = testScroll.scrollLeft - scrollValue;
  };

  return (
    <div className="contentHeader">
      <button
        onClick={leftArrow}
        className="arrowBtn arrowLeft"
        title="Previous"
      >
        <FaChevronLeft />
      </button>
      <div id="testScroll" className="categoriesContainer">
        {Categories.map((category) => {
          return (
            <div
              key={category.id}
              data-category={category.title}
              className={
                category.id === 1 ? "categoryItem active" : "categoryItem"
              }
            >
              {category.title}
            </div>
          );
        })}
      </div>
      <button onClick={rightArrow} className="arrowBtn arrowRight" title="Next">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ContentHeader;
