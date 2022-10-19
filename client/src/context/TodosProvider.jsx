import { createContext, useContext, useMemo, useState } from "react";
import * as todo from "../lib/api/todo";

const TodosValueContext = createContext(undefined);
const TodosActionsContext = createContext(undefined); // any 수정필요

const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const actions = useMemo(
		() => ({
			async get() {
				const data = await todo.getTodos();
				setTodos(data);
			},
			async add({ todo: text }) {
				if (text.length === 0) return;
				const newTodo = await todo.createTodo({ todo: text });
				setTodos((prevTodos) => [newTodo, ...prevTodos]);
			},
			async toggle({ selectedId, isCompleted, todo: text }) {
				await todo.updateTodo({ id: selectedId, isCompleted, todo: text });
				const data = await todo.getTodos();
				setTodos(data);
			},
			async remove({ selectedId }) {
				await todo.deleteTodo({ id: selectedId });
				const data = await todo.getTodos();
				setTodos(data);
			},
		}),
		[]
	);

	return (
		<TodosActionsContext.Provider value={actions}>
			<TodosValueContext.Provider value={todos}>
				{children}
			</TodosValueContext.Provider>
		</TodosActionsContext.Provider>
	);
};

export const useTodosValue = () => {
	const value = useContext(TodosValueContext);
	if (value === undefined) {
		throw new Error("useTodosValue should be used within TodosProvider");
	}
	return value;
};

export const useTodosActions = () => {
	const value = useContext(TodosActionsContext);
	if (value === undefined) {
		throw new Error("useTodosActions should be used within TodosProvider");
	}
	return value;
};

export default TodosProvider;
