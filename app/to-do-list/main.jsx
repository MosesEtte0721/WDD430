import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


console.log(uuidv4());


function Form() {
    const [Plan, setPlan] = useState('');    
    const [Todo, setTodo] = useState([]);

function HandleDelete(id){
  const NewTodo = Todo.filter((todo) => todo.id !== id);
  setTodo(NewTodo);
}
function HandleClick(event){
  event.preventDefault();

  Plan.trim() === '' ? alert('Please enter a plan') : 
  setTodo([...Todo, { id: uuidv4(), title: Plan, completed: false }]);
  setPlan('');
}

function Button(){
    return (        
        <button type="submit" value="Add" onClick={HandleClick}>Add</button>
    );
}

  return (
  <>
    <form onSubmit={event => event.preventDefault()}>
    
            <h1>Plan Your Day</h1>
          <label>Name:
            <input type="text" value={Plan} name="name" required placeholder='Enter your plan' onChange={(e)=> setPlan(e.target.value)} />
          </label>
          <Button />
        </form>
        <div>
          <h2> Your Plans: </h2>
          <ul>
            {Todo.map((Todo) => (  <li key={Todo.id} title={Todo.title}>{Todo.title} <button onClick={() => HandleDelete(Todo.id)}>Delete</button></li> ))}
        </ul>
        </div>
    </>
  );
}

export default Form;