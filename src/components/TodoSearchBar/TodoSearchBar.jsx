import styles from "./todoSearchBar.module.css";
const TodoSearchBar = ({searchValue, setSearchValue}) => {
  
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  
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
