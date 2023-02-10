import ToDo from "./ToDo"
import "./style.css"
import { useEffect, useState } from "react";
import { getAllToDo, addtodo, updatetodo, deletetodo } from "./utils/handleapi";
function App() {
  const [todo, setToDo] = useState([])
  const [text, setText] = useState('')
  const [isupdating, setisUpdating] = useState(false)
  const [todoId, setTodoId] = useState("")
  useEffect(() => {
    getAllToDo(setToDo)
  }, [])
  const updateMode = (_id, text) => {
    setisUpdating(true)
    setText(text)
    setTodoId(_id)
  }
  return (
    <div className="App">
      <div className="container" >
        <h1>To Do App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add to dos..."
            value={text}
            onChange={(e) => setText(e.target.value)} />

          <button onClick={isupdating ?
            () => updatetodo(todoId, text, setToDo, setText, setisUpdating)
            : () => addtodo(text, setText, setToDo)} > {isupdating ? "Update" : "Add"} </button>
        </div>
        <div className="list">
          {todo.map((item) => <ToDo key={item._id} text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deletetoDo={() => deletetodo(item._id, item.text)}
          />)}
        </div>
      </div>
    </div>
  );
}
export default App;
