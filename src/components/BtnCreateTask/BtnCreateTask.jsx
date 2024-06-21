import styles from "./btnCreateTask.module.css";
const BtnCreateTask = () => {
  const handleCreateClick = (e) => {
    alert("New click");
  };
  return (
    <button className={styles.btnCreateTask} onClick={handleCreateClick}>
      +
    </button>
  );
};

export { BtnCreateTask };
