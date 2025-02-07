import { useState, useEffect } from "react";

// css
import "./style.css";

// icons
import addIcon from "../../../icons/add.svg";

const Tagslist = ({
  tags,
  tasks,
  filters,
  setFilters,
  filteredTasks,
  setFilteredTasks,
  handleOpenModal,
}) => {
  const [selectedTagId, setSelectedTagId] = useState([]);

  useEffect(() => {
    if (filters.tag) {
      const allTasks = filteredTasks || tasks;

      const newTasks = allTasks.filter((task) => {
        let counter = 0;
        for (let tag of task.tags) {
          for (let id of selectedTagId) {
            if (id === tag.id) {
              counter++;
            }
          }
        }

        if (counter === selectedTagId.length) return task;
      });

      setFilteredTasks(selectedTagId.length ? newTasks : null);
    }
  }, [filters]);

  return (
    <div className='tags_list'>
      <h3>TAGS</h3>

      <div className='tags_list_items'>
        {tags.map((item) => {
          return (
            <div
              key={item.id}
              className='tags_list_item'
              style={{
                backgroundColor: `${item.color}`,
                border: selectedTagId.includes(item.id)
                  ? "1px solid black"
                  : "",
              }}
              onClick={() => {
                setSelectedTagId((prev) => {
                  let newTags = [];

                  if (prev.includes(item.id)) {
                    newTags = prev.filter((id) => id != item.id);
                  } else {
                    newTags = [...prev, item.id];
                  }

                  const allTasks = filteredTasks || tasks;

                  const newTasks = allTasks.filter((task) => {
                    let counter = 0;
                    for (let tag of task.tags) {
                      for (let id of newTags) {
                        if (id === tag.id) {
                          counter++;
                        }
                      }
                    }

                    if (counter === newTags.length) return task;
                  });

                  setFilteredTasks(newTags.length ? newTasks : null);
                  setFilters({ ...filters, tag: Boolean(newTags.length) });

                  return newTags;
                });
              }}
            >
              <span>{item.name}</span>
            </div>
          );
        })}

        <div className='tags_list_add' onClick={handleOpenModal}>
          <img src={addIcon} alt='add-icon' />
          <span>Add Tag</span>
        </div>
      </div>
    </div>
  );
};

export default Tagslist;
