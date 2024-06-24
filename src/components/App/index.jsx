import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AppUI } from "./AppUI";
function App() {
  // const defaultTodos = [
  //   { text: "Lavar los platos", completed: false },
  //   { text: "Hacer la tarea", completed: false },
  //   { text: "Sacar la basura", completed: false },
  //   { text: "Estudiar para el exámen", completed: false },
  //   { text: "Pasear al perro", completed: false },
  // ];
  const {
    loading,
    error,
    item: todos,
    saveItem: setTodos,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const completeds = todos.filter((task) => task.completed).length;

  const filteredTodos = todos.filter((task) => {
    const text = task?.text?.toLocaleLowerCase();
    const searchText = searchValue?.toLocaleLowerCase();
    return text?.includes(searchText);
  });

  const updateTask = (i) => {
    const newTodos = [...filteredTodos];
    newTodos[i].completed = !newTodos[i].completed;
    setTodos(newTodos);
  };

  const removeTask = (i) => {
    const taskToRemove = filteredTodos[i];
    const newTodos = todos.filter((task) => task?.text !== taskToRemove?.text);
    setTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      todos={todos}
      completeds={completeds}
      searchValue={searchValue}
      updateTask={updateTask}
      removeTask={removeTask}
      setSearchValue={setSearchValue}
    />
  );
}
export default App;
