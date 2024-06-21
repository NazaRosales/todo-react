import styles from "./todoCounter.module.css"
const TodoCounter = ({ completed, total }) => {
  return (
    <h1 className={styles.title}>
      Has completado {completed} de {total} tareas
    </h1>
  );
};
export { TodoCounter };
