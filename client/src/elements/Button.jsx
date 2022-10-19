import React from "react";
import styled from "styled-components";

const Button = (props) => {
	const { width, height, type, disabled, onClickButton, children } = props;
	const styles = { width, height };
	return (
		<ButtonBox
			{...styles}
			type={type}
			disabled={disabled}
			onClick={(e) => onClickButton(e)}
		>
			{children}
		</ButtonBox>
	);
};

Button.defaultProps = {
	width: "20vw",
	height: "40px",
	type: "button",
	disabled: false,
	onClickButton: null,
};

const ButtonBox = styled.button`
	width: ${(props) => props.width};
	height: ${({ height }) => height};
`;

export default Button;
