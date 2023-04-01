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
  const handleAddOrUpdateTodo = () => {
    if (isupdating) {
      updatetodo(todoId, text, setToDo, setText, setisUpdating)
    } 
    else {
      addtodo(text, setText, setToDo)
    }
  }
  return (
    <div className="app-container">
      <div className="bg-image"></div>
      <div className="todo-container">
        <h1 className="title">To Do App</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add to dos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input-list-box"
          />
          <button onClick={handleAddOrUpdateTodo} className="todo-btn">
            {isupdating ? "Update" : "Add"}
          </button>
        </div>
        <div className="list-container">
          {todo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deletetoDo={() => deletetodo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default App;

