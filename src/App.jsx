import { TodoCounter } from "./components/TodoCunter/TodoCounter";
import { TodoSearchBar } from "./components/TodoSearchBar/TodoSearchBar";
import { TodoList } from "./components/TodoList/TodoList";
import { BtnCreateTask } from "./components/BtnCreateTask/BtnCreateTask";
function App() {
 
  return (
    <>
      <TodoCounter completed={5} total={10} />
      <TodoSearchBar />
      <TodoList/>
      <BtnCreateTask />
    </>
  );
}
export default App;
