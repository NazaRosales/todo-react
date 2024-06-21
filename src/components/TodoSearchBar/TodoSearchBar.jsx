import styles from "./todoSearchBar.module.css";
const TodoSearchBar = () => {
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <input
      onInput={handleInputChange}
      className={styles.searchBar}
      type="text"
      placeholder="Cortar cebolla"
    />
  );
};
export { TodoSearchBar };
