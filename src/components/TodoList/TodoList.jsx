import styles from "./todoList.module.css"
import { TodoItem } from "../TodoItem/TodoItem";
const TodoList = () => {
  const defaultTodos = [
    { text: "Task 1", completed: false },
    { text: "Task 2", completed: false },
    { text: "Task 3", completed: false },
    { text: "Task 4", completed: false },
  ];
  return <ul className={styles.todosContainer}> {defaultTodos.map((task, index) => {
    return (
      <TodoItem
        key={task.text + index}
        i = {index}
        text={task.text}
        completed={task.completed}
      />
    );
  })}</ul>;
};
export { TodoList };
