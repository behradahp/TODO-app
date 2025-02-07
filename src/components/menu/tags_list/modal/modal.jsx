import { useState } from "react";

// css
import "./style.css";

// data
import { tagsColors } from "../../../../data";

const AddTagModal = ({ title, isOpen, action, handleClose }) => {
  const [addedTagData, setAddedTagData] = useState({
    name: undefined,
    color: undefined,
  });

  const handleSubmit = () => {
    if (addedTagData.name && addedTagData.color) {
      action(addedTagData);
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
          <label>Tag Name</label>
          <input
            type='text'
            onChange={(e) =>
              setAddedTagData({ ...addedTagData, name: e.target.value })
            }
          />

          <label>Color</label>
          <div className='colors'>
            {tagsColors.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: `${item}`,
                    border:
                      addedTagData.color === item ? "1px solid black" : "none",
                  }}
                  onClick={() =>
                    setAddedTagData({ ...addedTagData, color: item })
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

export default AddTagModal;
