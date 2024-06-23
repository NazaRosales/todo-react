import { TodoCounter } from "./components/TodoCunter/TodoCounter";
import { TodoSearchBar } from "./components/TodoSearchBar/TodoSearchBar";
import { TodoList } from "./components/TodoList/TodoList";
import { BtnCreateTask } from "./components/BtnCreateTask/BtnCreateTask";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
function App() {
  // const defaultTodos = [
  //   { text: "Lavar los platos", completed: false },
  //   { text: "Hacer la tarea", completed: false },
  //   { text: "Sacar la basura", completed: false },
  //   { text: "Estudiar para el exámen", completed: false },
  //   { text: "Pasear al perro", completed: false },
  // ];

  const [todos, setTodos] = useLocalStorage("TODOS_V1", []);
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
    <>
      <TodoCounter completed={completeds} total={todos.length} />
      <TodoSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList todos={todos} updateTask={updateTask} removeTask={removeTask} />
      <BtnCreateTask />
    </>
  );
}
export default App;
