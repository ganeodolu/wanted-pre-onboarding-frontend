const validation = {
	email: (text) => {
		const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
		if (!regEmail.test(text)) {
			return false;
		}
		return true;
	},
	textLength: (text, minLength) => {
		if (text.length < minLength) {
			return false;
		}
		return true;
	},
	isSameValue: (value1, value2) => {
		return value1 === value2 ? true : false;
	},
};

export { validation };
