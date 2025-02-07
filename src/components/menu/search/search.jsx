import { useState } from "react";

// components
import { RotatingLines } from "react-loader-spinner";

// icons
import searchIcon from "../../../icons/search.svg";

// css
import "./style.css";

const Search = ({ tasks, setFilteredTasks }) => {
  const [searchQuery, setSearchQuery] = useState(null);

  const searchFunction = (text) => {
    setSearchQuery(text || null);

    if (!text) {
      setFilteredTasks(null);
      return;
    }

    const timer = setTimeout(() => {
      const filteredTasks = tasks.filter(
        (task) => task.title.includes(text) || task.description.includes(text)
      );

      setFilteredTasks(filteredTasks);

      setSearchQuery(null);
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <div className='search'>
      <img src={searchIcon} alt='menu-icon' />
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => searchFunction(e.target.value)}
      />
      <RotatingLines visible={searchQuery} height='23' width='23' />
    </div>
  );
};

export default Search;
