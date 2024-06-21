import styles from "./todoItem.module.css";
const TodoItem = ({ text, completed, i, updateTask, removeTask }) => {
  return (
    <li className={styles.itemContainer}>
      <div className={i % 2 === 0 ? styles.itemBG1 : styles.itemBG2}>
        <span
          onClick={() => {
            updateTask(i);
          }}
        >
          V
        </span>
        <p className={completed ? styles.completed : null}>{text}</p>
        <span
          onClick={() => {
            removeTask(i);
          }}
        >
          X
        </span>
      </div>
    </li>
  );
};
export { TodoItem };
