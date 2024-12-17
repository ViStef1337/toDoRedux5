import './App.css'
import {Form} from "./components/Form/Form.jsx";
import {ToDoList} from "./components/ToDoList/ToDoList.jsx";
import {Filter} from "./components/Filter/Filter.jsx";

function App() {

  function checkAge(data) {
    if (data === { age: 18 }) {
      console.log("You are an adult!");
    } else if (data == { age: 18 }) {
      console.log("You are still an adult.");
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }

  checkAge({ age: 18 });

  return (
    <>
      <Form/>
        <ToDoList/>
        <Filter/>
    </>
  )
}

export default App
