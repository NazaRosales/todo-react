import styles from "./todoList.module.css";
import { TodoItem } from "../TodoItem/TodoItem";
const TodoList = ({ todos, updateTask, removeTask }) => {
  return (
    <ul className={styles.todosContainer}>
      {todos.map((task, index) => {
        return (
          <TodoItem
            key={task.text + index}
            i={index}
            text={task.text}
            completed={task.completed}
            updateTask={updateTask}
            removeTask={removeTask}
          />
        );
      })}
    </ul>
  );
};
export { TodoList };
