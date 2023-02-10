import React from 'react';
import "./style.css";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, updateMode, deletetoDo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deletetoDo}></AiFillDelete>
      </div>
    </div>
  )
}
export default ToDo;

