import styles from "./todoSearchBar.module.css";
import { TodosContext } from "../../provider/TodosProvider";
import { useContext } from "react";
const TodoSearchBar = () => {
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const { searchValue, setSearchValue } = useContext(TodosContext);

  return (
    <input
      value={searchValue}
      onInput={handleInputChange}
      className={styles.searchBar}
      type="text"
      placeholder="Cortar cebolla"
    />
  );
};
export { TodoSearchBar };
