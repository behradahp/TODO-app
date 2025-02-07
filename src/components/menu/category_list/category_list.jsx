import { useEffect, useState } from "react";

// css
import "./style.css";

// icons
import addIcon from "../../../icons/add.svg";

const Category_list = ({
  categories,
  counts,
  tasks,
  filters,
  setFilters,
  filteredTasks,
  setFilteredTasks,
  handleOpenModal,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    if (filters.category) {
      const allTasks = filteredTasks || tasks;
      const newFilteredTasks = allTasks.filter(
        (task) => selectedCategoryId === task.category.id
      );
      setFilteredTasks(newFilteredTasks);
    }
  }, [filters]);

  return (
    <div className='category_list'>
      <h3>LISTS</h3>
      {categories.map((item) => {
        return (
          <div
            key={item.id}
            className='category_list_item'
            style={{
              backgroundColor: selectedCategoryId === item.id ? "white" : "",
            }}
            onClick={() => {
              if (selectedCategoryId === item.id) {
                setFilteredTasks(null);
                setFilters({ ...filters, category: false });
              } else {
                const allTasks = filteredTasks || tasks;
                const newFilteredTasks = allTasks.filter(
                  (task) => item.id === task.category.id
                );
                setFilteredTasks(newFilteredTasks);
                setFilters({ ...filters, category: true });
              }

              setSelectedCategoryId((prev) =>
                prev === item.id ? null : item.id
              );
            }}
          >
            <div className='category_list_item_title'>
              <div
                className='category_color'
                style={{ backgroundColor: `${item.color}` }}
              ></div>
              <span>{item.name}</span>
            </div>
            <div className='category_list_item_count'>
              <div>{counts[item.name]}</div>
            </div>
          </div>
        );
      })}

      <div className='categoty_list_add' onClick={handleOpenModal}>
        <img src={addIcon} alt='add_icon' />
        <span>Add New List</span>
      </div>
    </div>
  );
};

export default Category_list;
