import styles from "./todoSearchBar.module.css";
import { ImSearch } from "react-icons/im";
import { TodosContext } from "../../provider/TodosProvider";
import { useContext } from "react";
const TodoSearchBar = () => {
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const { searchValue, setSearchValue } = useContext(TodosContext);

  return (
    <div className={styles.searchContainer}>
      <input
        value={searchValue}
        onInput={handleInputChange}
        className={styles.searchBar}
        type="text"
        placeholder="Cortar cebolla"
      />
      <ImSearch className={styles.searchIcon} />
    </div>
  );
};
export { TodoSearchBar };
