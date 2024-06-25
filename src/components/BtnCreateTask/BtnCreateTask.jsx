import { useContext } from "react";
import styles from "./btnCreateTask.module.css";
import { TodosContext } from "../../provider/TodosProvider";
const BtnCreateTask = () => {
  const { setOpenModal } = useContext(TodosContext);
  return (
    <button
      className={styles.btnCreateTask}
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
};

export { BtnCreateTask };
