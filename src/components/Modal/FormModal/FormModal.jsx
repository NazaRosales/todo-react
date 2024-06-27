import { useState } from "react";
import styles from "./FormModal.module.css";
import { useContext } from "react";
import { TodosContext } from "../../../provider/TodosProvider";
const FormModal = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const { addTask, setOpenModal } = useContext(TodosContext);
  const createNewTask = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      const newTask = {
        text: text,
        completed: false,
      };
      addTask(newTask);
      setText("");
      setOpenModal(false);
    } else {
      setError("Ingresa un texto a tu tarea.");
    }
  };
  const handleInputText = (e) => {
    const { value } = e.target;
    if (value.length > 0) {
      setError("");
    }
    setText(value);
  };
  return (
    <form
      className={styles.modalContainer}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset>
        <label>Ingresa una nueva tarea:</label>
        <textarea
          type="text"
          placeholder="Estudiar para el exámen de inglés."
          value={text}
          onInput={handleInputText}
        />
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          className={styles.btnCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className={styles.btnCreate}
          onClick={createNewTask}
        >
          Crear
        </button>
      </fieldset>
      {error.length > 0 ? <p className={styles.error}>{error}</p> : null}
    </form>
  );
};
export { FormModal };
