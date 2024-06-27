import styles from "./todoCounter.module.css";
const TodoCounter = ({ completed, total }) => {
  return (
    <h1 className={styles.title}>
      Has completado <span className={styles.counter}>{completed}</span> de{" "}
      <span className={styles.counter}>{total}</span> tareas
    </h1>
  );
};
export { TodoCounter };
