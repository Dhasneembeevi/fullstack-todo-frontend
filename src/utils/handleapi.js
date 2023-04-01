import axios from 'axios';

const baseUrl = "https://fullstack-todo-backend-91qp.onrender.com"
const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ----> ', data)
            setToDo(data)
        })
        .catch((err) => console.log(err))
}
const addtodo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then(({ data }) => {
            console.log(data)
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

const updatetodo = (todoId, text, setToDo, setText, setisUpdating) => {
    axios
        .post(`${baseUrl}/update`, { _id: todoId, text })
        .then(({ data }) => {
            console.log(data)
            setText("")
            setisUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}
const deletetodo = (_id, setToDo) => {
    axios
        .post(`${baseUrl}/delete`, { _id })
        .then(({ data }) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}
export { getAllToDo, addtodo, updatetodo, deletetodo }
