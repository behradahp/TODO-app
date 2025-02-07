import { useState } from "react";

// icons
import chevronIcon from "../../../icons/chevron.svg";

const CategorySelection = ({ taskData, setTaskData, categories }) => {
  const [isCategorySelectionOpen, setIsCategorySelectionOpen] = useState(false);

  return (
    <div
      className='category_selection'
      onClick={() => setIsCategorySelectionOpen((prev) => !prev)}
    >
      <span>
        {taskData?.category ? taskData?.category.name : "Not Choosen"}
      </span>
      <img src={chevronIcon} alt='down-chevron' />
      <div
        className='categories'
        style={{
          height: isCategorySelectionOpen ? "auto" : "0%",
          opacity: isCategorySelectionOpen ? "1" : "0",
          display: isCategorySelectionOpen ? "" : "none",
        }}
      >
        {categories.map((item) => {
          return (
            <span
              key={item.id}
              onClick={() =>
                setTaskData((prev) => ({
                  ...prev,
                  category: item,
                }))
              }
            >
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelection;
