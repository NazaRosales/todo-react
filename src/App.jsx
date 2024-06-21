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
    { text: "Estudiar para el exámen", completed: true },
    { text: "Pasear al perro", completed: false },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(defaultTodos);
  const [completeds, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(
      filteredTodos.filter((task) => {
        return task.completed;
      }).length
    );
  }, [filteredTodos]);

  const todosDisplay = filteredTodos.filter((task) => {
    const text = task?.text?.toLocaleLowerCase();
    const searchText = searchValue?.toLocaleLowerCase();
    return text?.includes(searchText);
  });

  const updateTask = (i) => {
    setFilteredTodos([
      ...filteredTodos,
      (filteredTodos[i].completed = !filteredTodos[i].completed),
    ]);
  };

  const removeTask = (i) => {
    setFilteredTodos(filteredTodos.filter((task, index) => index !== i));
  };
  return (
    <>
      <TodoCounter completed={completeds} total={defaultTodos.length} />
      <TodoSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList
        todos={todosDisplay}
        updateTask={updateTask}
        removeTask={removeTask}
      />
      <BtnCreateTask />
    </>
  );
}
export default App;
