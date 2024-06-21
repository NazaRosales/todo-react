import { TodoCounter } from "./components/TodoCunter/TodoCounter";
import { TodoSearchBar } from "./components/TodoSearchBar/TodoSearchBar";
import { TodoList } from "./components/TodoList/TodoList";
import { BtnCreateTask } from "./components/BtnCreateTask/BtnCreateTask";
import { useEffect, useState } from "react";

function App() {
  const defaultTodos = [
    { text: "Lavar los platos", completed: false },
    { text: "Hacer la tarea", completed: false },
    { text: "Sacar la basura", completed: false },
    { text: "Estudiar para el exámen", completed: false },
    { text: "Pasear al perro", completed: false },
  ];

  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(
      todos.filter((task) => {
        const text = task?.text?.toLocaleLowerCase();
        const searchText = searchValue?.toLocaleLowerCase();
        return text?.includes(searchText);
      })
    );
  }, [searchValue, todos]);


  const completeds = todos.filter((task) => task.completed).length;

  const updateTask = (i) => {
    const newTodos = [...filteredTodos];
    newTodos[i].completed = !newTodos[i].completed;
    setFilteredTodos(newTodos);
  };

  const removeTask = (i) => {
    const taskToRemove = filteredTodos[i]
    const newTodos = todos.filter( task => task?.text !== taskToRemove?.text)
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completeds} total={todos.length} />
      <TodoSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList
        todos={filteredTodos}
        updateTask={updateTask}
        removeTask={removeTask}
      />
      <BtnCreateTask />
    </>
  );
}
export default App;
