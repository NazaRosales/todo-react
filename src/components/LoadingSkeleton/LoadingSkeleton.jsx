import styles from "./LoadingSkeleton.module.css";
const LoadingSkeleton = () => {
  return (
    <div className={styles.loadingContainer}>
      <span className={styles.loadingIcon}></span>
      <p className={styles.loadingText}></p>
      <span className={styles.loadingIcon}></span>
    </div>
  );
};
export { LoadingSkeleton };
