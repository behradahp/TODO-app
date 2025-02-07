import { useEffect, useState } from "react";

// components
import Search from "./search/search";
import TasksList from "./tasks_list/tasks_list";
import Category_list from "./category_list/category_list";
import Tagslist from "./tags_list/tags_list";
import AddTagModal from "./tags_list/modal/modal";
import AddCategoryModal from "./category_list/modal/modal";

// functions
import { categoryItemsCount } from "../../functions/functions";

// icons
import menuIcon from "../../icons/menu.svg";

// css
import "./style.css";

const Menu = ({
  tasks,
  filters,
  setFilters,
  filteredTasks,
  setFilteredTasks,
  tags,
  setTags,
  categories,
  setCategories,
}) => {
  const [isAddTagModalOpen, setIsAddTagModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [categoryCounts, setCategoryCounts] = useState(
    categoryItemsCount(tasks, categories)
  );

  useEffect(() => {
    setCategoryCounts(categoryItemsCount(tasks, categories));
  }, [tasks]);

  return (
    <>
      <aside>
        <div className='head'>
          <h2 className='title'>Menu</h2>
          <img src={menuIcon} alt='menu-icon' />
        </div>

        <Search tasks={tasks} setFilteredTasks={setFilteredTasks} />

        <TasksList count={tasks.length} />

        <Category_list
          categories={categories}
          counts={categoryCounts}
          tasks={tasks}
          filters={filters}
          setFilters={setFilters}
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
          handleOpenModal={() => setIsAddCategoryModalOpen(true)}
        />

        <Tagslist
          tags={tags}
          tasks={tasks}
          filters={filters}
          setFilters={setFilters}
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
          handleOpenModal={() => setIsAddTagModalOpen(true)}
        />
      </aside>

      <AddTagModal
        title={"Add New Tag"}
        isOpen={isAddTagModalOpen}
        action={(data) =>
          setTags([...tags, { id: tags[tags.length - 1].id + 1, ...data }])
        }
        handleClose={() => setIsAddTagModalOpen(false)}
      />

      <AddCategoryModal
        title={"Add New Category"}
        isOpen={isAddCategoryModalOpen}
        action={(data) => {
          setCategoryCounts({
            ...categoryCounts,
            [data.name]: 0,
          });
          setCategories([
            ...categories,
            { id: categories[categories.length - 1].id + 1, ...data },
          ]);
        }}
        handleClose={() => setIsAddCategoryModalOpen(false)}
      />
    </>
  );
};

export default Menu;
