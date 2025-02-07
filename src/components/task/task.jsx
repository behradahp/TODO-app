import { useEffect, useState } from "react";

// components
import TextInputs from "./inputs/text_inputs";
import CategorySelection from "./category_selection/category_selection";
import TagsSelection from "./tags_selection/tags_selection";

// css
import "./style.css";

const Task = ({
  isOpen = false,
  handleClose,
  editingTask,
  setEditingTask,
  newId,
  setTasks,
  tags,
  categories,
}) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    tags: [],
    category: null,
  });

  useEffect(() => {
    setTaskData(
      editingTask || {
        title: "",
        description: "",
        tags: [],
        category: null,
      }
    );
  }, [editingTask]);

  return (
    <section
      className='task'
      style={{
        width: isOpen ? "400px" : "0px",
        opacity: isOpen ? "1" : "0",
      }}
    >
      <h2 className='title'>Task:</h2>

      <div className='inputs'>
        <TextInputs taskData={taskData} setTaskData={setTaskData} />
      </div>

      <div className='info'>
        <div className='keys'>
          <span>List</span>
          <span>Tags</span>
        </div>
        <div className='values'>
          <CategorySelection
            taskData={taskData}
            setTaskData={setTaskData}
            categories={categories}
          />
          <TagsSelection
            taskData={taskData}
            setTaskData={setTaskData}
            tags={tags}
          />
        </div>
      </div>

      <div className='buttons'>
        <button
          style={{ border: "1px solid #EAEAEA" }}
          onClick={() => {
            setTaskData({
              title: "",
              description: "",
              tags: [],
              category: null,
            });
            handleClose();
          }}
        >
          cancel
        </button>
        <button
          style={{ backgroundColor: "#FFD43B" }}
          onClick={() => {
            if (editingTask) {
              setTasks((prev) => {
                const newTasks = JSON.parse(JSON.stringify(prev));

                for (let i = 0; i < prev.length; i++) {
                  if (prev[i].id === editingTask.id) {
                    newTasks[i] = taskData;
                  }
                }

                return newTasks;
              });
            } else setTasks((prev) => [...prev, { id: newId, ...taskData }]);

            setEditingTask(null);

            setTaskData({
              title: "",
              description: "",
              tags: [],
              category: null,
            });
            handleClose();
          }}
        >
          {editingTask ? "Save Changes" : "Add Task"}
        </button>
      </div>
    </section>
  );
};

export default Task;
