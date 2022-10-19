import { useTodosActions } from '../context/TodosProvider';

const TodoItem = ({ todoItem }) => {
  const { id, isCompleted, todo, userId } = todoItem;
  const { toggle, remove } = useTodosActions();

  return (
    <div className="todo-item">
      <input className="toggle" type="checkbox" checked={isCompleted} onChange={() => toggle({selectedId: id, isCompleted: !isCompleted, todo})} />
      <label className={isCompleted ? 'todo-complete-label' : 'todo-text-label'}>{todo}</label>
      <button className="delete-btn" onClick={() => remove({selectedId: id})}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
