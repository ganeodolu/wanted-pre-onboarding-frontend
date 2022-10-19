import { APIWithAuth } from "./main";

const getTodos = async () => {
	try {
		const response = await APIWithAuth.get(`/todos`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
const createTodo = async ({
	todo,
}) => {
	try {
		const response = await APIWithAuth.post("/todos", {
			todo,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
const updateTodo = async ({
	id,
	todo,
	isCompleted
}) => {
	try {
		const response = await APIWithAuth.put(`/todos/${id}`, {
			todo,
			isCompleted
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
const deleteTodo = async ({ id }) => {
	try {
		const response = await APIWithAuth.delete(`/todos/${id}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export { getTodos, createTodo, updateTodo, deleteTodo}