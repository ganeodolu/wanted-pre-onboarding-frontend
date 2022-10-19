import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import TodosProvider from "../context/TodosProvider";

const TodoPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const userToken = localStorage.getItem("user");
		if (!userToken) {
			navigate("/");
		}
	}, []);

	return (
		<TodosProvider>
			<TodoInput />
			<TodoList />
		</TodosProvider>
	);
};

export default TodoPage;
