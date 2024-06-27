import { ImCheckmark } from "react-icons/im";
import { ImCheckmark2 } from "react-icons/im";
import styles from "./CompleteIcon.module.css";
const CompleteIcon = ({ updateTask, i, completed }) => {
  return (
    <span
      onClick={() => {
        updateTask(i);
      }}
    >
      {completed ? (
        <ImCheckmark className={styles.icon} style={{ color: "#FFF" }} />
      ) : (
        <ImCheckmark2 className={styles.icon}  />
      )}
    </span>
  );
};

export { CompleteIcon };
