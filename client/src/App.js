import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TodoPage from "./pages/TodoPage";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<SignIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/todo" element={<TodoPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
