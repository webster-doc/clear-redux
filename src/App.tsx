import React, {ChangeEventHandler, useState} from 'react';
import './App.css';
import { useTypeSelector } from "./store/hooks/useTypedSelector"
import { useTodoActions } from "./store/hooks/useTypedActions/useTodoActions";
import { getTodosSelector } from "./store/reducers/todoReducer/selector";


function App() {
  const [todoText, setTodoText] = useState('')
  const todos = useTypeSelector(getTodosSelector)
  const todoActions = useTodoActions()
  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoText(e.target.value)
  }
  const submitHandler = () => {
    todoActions.addTodo({text: todoText})
    setTodoText('')
  }

  return (
    <div className="App">
      <input type="text" value={todoText} onChange={inputChangeHandler} />
      <button onClick={submitHandler} >
        Добавить
      </button>

      {todos.map(({text, id}) => (<div key={id} >
        {text} <button onClick={() => todoActions.deleteTodo({ id })} >x</button>
      </div>))}
    </div>
  );
}

export default App;
