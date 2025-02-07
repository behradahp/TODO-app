import { useState } from "react";

// css
import "./style.css";

// data
import { categoriesColors } from "../../../../data";

const AddCtegoryModal = ({ title, isOpen, action, handleClose }) => {
  const [addedCategoryData, setAddedCategoryData] = useState({
    name: undefined,
    color: undefined,
  });

  const handleSubmit = () => {
    if (addedCategoryData.name && addedCategoryData.color) {
      action(addedCategoryData);
      handleClose();
    }
  };

  return (
    <section
      className='modal'
      id='sec'
      style={{ display: isOpen ? "" : "none" }}
      onClick={(e) => (e.target.id === "sec" ? handleClose() : () => {})}
    >
      <article>
        <h2>{title}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label>Category Name</label>
          <input
            type='text'
            onChange={(e) =>
              setAddedCategoryData({
                ...addedCategoryData,
                name: e.target.value,
              })
            }
          />

          <label>Color</label>
          <div className='colors'>
            {categoriesColors.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: `${item}`,
                    border:
                      addedCategoryData.color === item
                        ? "1px solid black"
                        : "none",
                  }}
                  onClick={() =>
                    setAddedCategoryData({ ...addedCategoryData, color: item })
                  }
                ></div>
              );
            })}
          </div>

          <button>Add</button>
        </form>
      </article>
    </section>
  );
};

export default AddCtegoryModal;
