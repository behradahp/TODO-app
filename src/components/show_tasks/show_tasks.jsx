// css
import "./style.css";

// icon
import addIcon from "../../icons/add.svg";
import chevronIcon from "../../icons/chevron.svg";

const ShowTasks = ({ tasks, filteredTasks, setIsTaskOpen, setEditingTask }) => {
  const tasksRendering = (item) => {
    return (
      <div
        key={item.id}
        className='task_item'
        onClick={() => {
          setEditingTask(item);
          setIsTaskOpen(true);
        }}
      >
        <div className='title'>
          <input type='checkbox' name='' id='' />
          <span>{item.title}</span>
          <img src={chevronIcon} alt='right-arrow' />
        </div>

        <div className='description'>
          <span>{item.description}</span>
        </div>

        <div className='informations'>
          <div className='list'>
            <div
              className='color'
              style={{ backgroundColor: `${item.category.color}` }}
            ></div>
            <span>{item.category.name}</span>
          </div>

          <div className='tags'>
            {item.tags.map((tag) => {
              return (
                <div key={tag.id} style={{ backgroundColor: `${tag.color}` }}>
                  {tag.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className='show_tasks'>
      <div className='show_tasks_title'>
        <h2>All Tasks</h2>
        <div>
          <span>{tasks.length}</span>
        </div>
      </div>

      <div className='add_task' onClick={() => setIsTaskOpen((prev) => !prev)}>
        <img src={addIcon} alt='add-icon' />
        <span>Add New Task</span>
      </div>

      <div className='scrollable'>
        {filteredTasks
          ? filteredTasks.map((item) => {
              return tasksRendering(item);
            })
          : tasks.map((item) => {
              return tasksRendering(item);
            })}
      </div>
    </section>
  );
};

export default ShowTasks;
