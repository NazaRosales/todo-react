import { TodoCounter } from "../TodoCunter/TodoCounter";
import { TodoSearchBar } from "../TodoSearchBar/TodoSearchBar";
import { TodoList } from "../TodoList/TodoList";
import { BtnCreateTask } from "../BtnCreateTask/BtnCreateTask";
import { LoadingSkeleton } from "../LoadingSkeleton/LoadingSkeleton";
import { TodosContext } from "../../provider/TodosProvider";
import { useContext } from "react";
const AppUI = () => {
  const {
    loading,
    error,
    completeds,
    todos,
    updateTask,
    removeTask,
    getTotalTodos,
  } = useContext(TodosContext);
  return (
    <>
      <TodoCounter completed={completeds} total={getTotalTodos()} />
      <TodoSearchBar />
      {!loading && todos.length < 1 && !error ? (
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
    </>
  );
};

export { AppUI };
