import { useRef } from "react";
import { useTodosActions } from "../context/TodosProvider";
import { Button } from "../elements";

const TodoInput = () => {
	const { add } = useTodosActions();
	const inputValueRef = useRef(null);

	const handleInputSubmit = (e) => {
		e.preventDefault();
		if (inputValueRef.current) {
			const inputValue = inputValueRef.current.value;
			if (inputValue.length === 0) return;
			add({ todo: inputValue });
			inputValueRef.current.value = "";
		}
	};

	return (
		<header>
			<h1 className="header-text">Todos</h1>
			<form
				name="todoInputContainer"
				className="todo-input-container"
				onSubmit={handleInputSubmit}
			>
				<input
					ref={inputValueRef}
					type="text"
					name="todoInput"
					className="todo-input"
					placeholder="할일을 입력해주세요"
				/>
				<Button width="550px" onClickButton={handleInputSubmit}>추가</Button>
			</form>
		</header>
	);
};

export default TodoInput;
