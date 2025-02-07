// css
import "./style.css";

// Icons
import listIcon from "../../../icons/list.svg";

const TasksList = ({ count }) => {
  return (
    <div className='tasks_list'>
      <h3>TASKS</h3>
      <div className='tasks_list_item'>
        <div className='tasks_list_item_title'>
          <img src={listIcon} alt='menu-icon' />
          <span>All Tasks</span>
        </div>
        <div className='tasks_list_item_count'>
          <div> {count} </div>
        </div>
      </div>
    </div>
  );
};

export default TasksList;
