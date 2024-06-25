import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.jsx";

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const {
    loading,
    error,
    item: todos,
    saveItem: setTodos,
    getTotalItems: getTotalTodos,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const completeds = todos.filter((task) => task.completed).length;

  const filteredTodos = todos.filter((task) => {
    const text = task?.text?.toLocaleLowerCase();
    const searchText = searchValue?.toLocaleLowerCase();
    return text?.includes(searchText);
  });

  const updateTask = (i) => {
    const newTodos = [...todos];
    const taskIndex = todos.findIndex(
      (task) => task.text === filteredTodos[i].text
    );
    if (taskIndex > -1) {
      newTodos[taskIndex].completed = !newTodos[taskIndex].completed;
      setTodos(newTodos);
    }
  };

  const removeTask = (i) => {
    const taskToRemove = filteredTodos[i];
    const newTodos = todos.filter((task) => task?.text !== taskToRemove?.text);
    setTodos(newTodos);
  };

  const addTask = (task) => {
    const newTodos = [...todos, task];
    setTodos(newTodos);
  };

  const totalTodos = getTotalTodos();
  return (
    <TodosContext.Provider
      value={{
        error,
        loading,
        completeds,
        todos: filteredTodos,
        searchValue,
        totalTodos,
        setSearchValue,
        updateTask,
        removeTask,
        openModal,
        setOpenModal,
        addTask,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
