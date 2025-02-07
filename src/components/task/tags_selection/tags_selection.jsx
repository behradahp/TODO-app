import { useState } from "react";

// icons
import addIcon from "../../../icons/add.svg";

const TagsSelection = ({ taskData, setTaskData, tags }) => {
  const [isTagsSelectionOpen, setIsTagsSelectionOpen] = useState(false);

  return (
    <div className='tags'>
      {taskData?.tags.map((item) => {
        return (
          <div
            key={item.id}
            className='tag_item'
            style={{ backgroundColor: `${item.color}` }}
            onClick={() => {
              const newTags = taskData?.tags.filter(
                (tagItem) => tagItem.id != item.id
              );

              setTaskData((prev) => ({
                ...prev,
                tags: newTags,
              }));
            }}
          >
            {item.name}
          </div>
        );
      })}
      <div
        className='add_tag'
        onClick={() => {
          setIsTagsSelectionOpen((prev) => !prev);
        }}
      >
        <img src={addIcon} alt='add-icon' />
        <span>Add Tag</span>
        <div
          className='tags_selection'
          style={{
            height: isTagsSelectionOpen ? "auto" : "0%",
            opacity: isTagsSelectionOpen ? "1" : "0",
            display: isTagsSelectionOpen ? "" : "none",
          }}
        >
          {tags.map((tag) => {
            return (
              <div
                key={tag.id}
                onClick={() => {
                  let exist = false;

                  for (let tagItem of taskData?.tags) {
                    if (tagItem.id === tag.id) {
                      exist = true;
                      break;
                    }
                  }

                  if (!exist) {
                    setTaskData((prev) => ({
                      ...prev,
                      tags: [...prev.tags, tag],
                    }));
                  }
                }}
              >
                <div style={{ backgroundColor: `${tag.color}` }}></div>
                <span>{tag.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TagsSelection;
