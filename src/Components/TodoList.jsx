import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});
  
  const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      const todo_obj = {heading: headingInput, lists: []}
      setTodos([...todos, todo_obj])
      setHeadingInput('')
    }
  }

  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: '' });
    }
  }

  const handleListInputs = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  }

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
  <input
    type="text"
    className="heading-input"
    placeholder="Enter heading"
    value={headingInput}
    onChange={(e) => {setHeadingInput(e.target.value);}} // Add onChange event handler to update headingInput state
  />
  <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
</div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
      <div key={index} className="todo-card">
        <div className="heading_todo">
          <h3>{todo.heading}</h3> {/* Display the heading here */}
          <button className="delete-button-heading">Delete Heading </button> <br>
          <input type='text' className='text-input' placeholder='Add List' onChange={(e) => handleListInputs(index, e.target.value)}></input>
          <button className='add-list-button' onClick={handleAddList(index)}>Add List</button>
          <ul>
            {todo.lists.map((list, listIndex) => (
              <li key={listIndex}><p>{list}</p></li>
            ))}
          </ul>
        </div>
      </div>
    ))}
      </div>
    </>
  );
};

export default TodoList;
