import { TodoCounter } from "../TodoCunter/TodoCounter";
import { TodoSearchBar } from "../TodoSearchBar/TodoSearchBar";
import { TodoList } from "../TodoList/TodoList";
import { BtnCreateTask } from "../BtnCreateTask/BtnCreateTask";
const AppUI = ({
  loading,
  error,
  completeds,
  todos,
  searchValue,
  setSearchValue,
  updateTask,
  removeTask,
}) => {
  return (
    <>
      <TodoCounter completed={completeds} total={todos.length} />
      <TodoSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {loading && <p>Cargando...</p>}
      {!loading && todos.length < 1 && !error ? (
        <p>Crea tu primer tarea.</p>
      ) : null}
      {error && !loading ? (
        <p>Hubo un error al intentar mostrar las tareas.</p>
      ) : null}
      <TodoList todos={todos} updateTask={updateTask} removeTask={removeTask} />
      <BtnCreateTask />
    </>
  );
};

export { AppUI };
