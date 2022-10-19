import { Button } from "../elements/index";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const [isSignIn, setIsSignIn] = useState(false);

	const onClickButton = () => {
		localStorage.removeItem("user");
		setIsSignIn(false);
		navigate("/");
	};

	useEffect(() => {
		const userToken = localStorage.getItem("user");
		if (userToken) {
			setIsSignIn(true);
		} else {
			setIsSignIn(false);
		}
	});

	if (isSignIn) {
		return (
			<div>
				<>
					<Button onClickButton={() => navigate("/")}>홈</Button>
				</>
				<>
					<Button onClickButton={onClickButton}>로그아웃</Button>
				</>
			</div>
		);
	}

	return (
		<div>
			<>
				<Button onClickButton={() => navigate("/")}>홈</Button>
			</>
			<>
				<Button onClickButton={() => navigate("/signup")}>회원가입</Button>
				<Button onClickButton={() => navigate("/")}>로그인</Button>
			</>
		</div>
	);
};

export default Header;
