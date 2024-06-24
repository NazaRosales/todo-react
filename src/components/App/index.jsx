import { TodosProvider } from "../../provider/TodosProvider";
import { AppUI } from "./AppUI";
function App() {
  // const defaultTodos = [
  //   { text: "Lavar los platos", completed: false },
  //   { text: "Hacer la tarea", completed: false },
  //   { text: "Sacar la basura", completed: false },
  //   { text: "Estudiar para el exámen", completed: false },
  //   { text: "Pasear al perro", completed: false },
  // ];

  return (
    <TodosProvider>
      <AppUI />
    </TodosProvider>
  );
}
export default App;
