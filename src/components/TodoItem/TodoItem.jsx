import styles from "./todoItem.module.css"
const TodoItem = ({ text, completed, i }) => {
  return (
    <li className={styles.itemContainer}>
      <div className={ i % 2 === 0 ? styles.itemBG1 : styles.itemBG2}>
        <span>V</span>
        <h2>{text}</h2>
        <span>X</span>
      </div>
    </li>
  );
};
export { TodoItem };
