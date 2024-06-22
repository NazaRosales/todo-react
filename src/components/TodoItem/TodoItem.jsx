import styles from "./todoItem.module.css";
import { CompleteIcon } from "./CompleteIcon/CompleteIcon";
import { DeleteIcon } from "./DeleteIcon/DeleteIcon";

const TodoItem = ({ text, completed, i, updateTask, removeTask }) => {
  return (
    <li className={styles.itemContainer}>
      <div className={i % 2 === 0 ? styles.itemBG1 : styles.itemBG2}>
        <CompleteIcon updateTask={updateTask} i={i} completed={completed} />
        <p className={completed ? styles.completed : null}>{text}</p>
        <DeleteIcon removeTask={removeTask} i={i} />
      </div>
    </li>
  );
};
export { TodoItem };
