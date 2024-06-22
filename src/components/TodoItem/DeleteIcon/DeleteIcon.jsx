import { ImCross } from "react-icons/im";
import styles from "./DeleteIcon.module.css";
const DeleteIcon = ({ removeTask, i,  }) => {
  return (
    <span
      onClick={() => {
        removeTask(i);
      }}
    >
      <ImCross className={styles.icon} />
    </span>
  );
};

export { DeleteIcon };