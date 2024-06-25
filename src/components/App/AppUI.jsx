import { TodoCounter } from "../TodoCunter/TodoCounter";
import { TodoSearchBar } from "../TodoSearchBar/TodoSearchBar";
import { TodoList } from "../TodoList/TodoList";
import { BtnCreateTask } from "../BtnCreateTask/BtnCreateTask";
import { LoadingSkeleton } from "../LoadingSkeleton/LoadingSkeleton";
import { TodosContext } from "../../provider/TodosProvider";
import { useContext } from "react";
import { Modal } from "../Modal/Modal";
import { FormModal } from "../Modal/FormModal/FormModal";
const AppUI = () => {
  const {
    loading,
    error,
    completeds,
    todos,
    updateTask,
    removeTask,
    totalTodos,
    openModal,
  } = useContext(TodosContext);
  return (
    <>
      <TodoCounter completed={completeds} total={totalTodos} />
      <TodoSearchBar />
      {!loading && totalTodos === 0 && !error ? (
        <h2>Crea tu primer tarea.</h2>
      ) : null}
      {error && !loading ? (
        <h2>Hubo un error al intentar mostrar las tareas.</h2>
      ) : null}
      {loading ? (
        <div>
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      ) : (
        <TodoList
          todos={todos}
          updateTask={updateTask}
          removeTask={removeTask}
        />
      )}

      <BtnCreateTask />
      {openModal && (
        <Modal>
          <FormModal />
        </Modal>
      )}
    </>
  );
};

export { AppUI };
