import { useState } from "react";

// components
import Menu from "./components/menu/menu";
import ShowTasks from "./components/show_tasks/show_tasks";
import Task from "./components/task/task";

// css
import "./App.css";

// data
import { data, tagsData, categoriesData } from "./data";

function App() {
  const [tasks, setTasks] = useState(data);
  const [filteredTasks, setFilteredTasks] = useState(null);
  const [filters, setFilters] = useState({
    category: false,
    tag: false,
  });
  const [tags, setTags] = useState(tagsData);
  const [categories, setCategories] = useState(categoriesData);

  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  return (
    <>
      <main>
        <Menu
          tasks={tasks}
          filters={filters}
          setFilters={setFilters}
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
          tags={tags}
          setTags={setTags}
          categories={categories}
          setCategories={setCategories}
        />

        <ShowTasks
          tasks={tasks}
          filteredTasks={filteredTasks}
          setIsTaskOpen={setIsTaskOpen}
          setEditingTask={setEditingTask}
        />

        <Task
          isOpen={isTaskOpen}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          handleClose={() => setIsTaskOpen(false)}
          newId={tasks[tasks.length - 1].id + 1}
          setTasks={setTasks}
          tags={tags}
          categories={categories}
        />
      </main>
    </>
  );
}

export default App;
