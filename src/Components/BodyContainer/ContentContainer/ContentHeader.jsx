import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Categories from "../../../data/Content/Categories.json";

function ContentHeader() {
  return (
    <div className="contentHeader">
      <button className="arrowBtn arrowLeft" title="Previous">
        <FaChevronLeft />
      </button>
      <div className="categoriesContainer">
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
      <button className="arrowBtn arrowRight" title="Next">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ContentHeader;
