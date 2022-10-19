import { useEffect } from 'react';
import { useTodosActions, useTodosValue } from '../context/TodosProvider';
import TodoItem from './TodoItem';


const TodoList = () => {
  const todoList = useTodosValue();
  const { get } = useTodosActions();
  console.log(todoList);
  useEffect(() => {
    const getTodos = async () => {
      get()
    }
    getTodos();
  }, [])
  
  return (
    <main className="todo-list">
      {todoList.map(todoItem => <TodoItem todoItem={todoItem} key={todoItem.id} />)}
    </main>
  );
};

export default TodoList;
