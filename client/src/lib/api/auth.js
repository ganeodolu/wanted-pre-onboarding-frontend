import API from "./main";

const signIn = async ({
	email,
	password,
}) => {
	try {
		const response = await API.post("/auth/signin", {
			email,
			password,
		});
		console.log(response)
    // const { access_token } = response.data;
		const token = response.data.access_token;
		
    token && localStorage.setItem('user',  token);
		return response;
	} catch (error) {
		console.log(error);
		alert(error.response.statusText)
	}
};

const signUp = async ({
	email,
	password,
}) => {
	try {
		const response = await API.post("/auth/signup", {
			email,
			password,
		});
		console.log(response)
    console.log(response.data)
		return response;
	} catch (error) {
		console.log(error);
    if(error.response.data.details){
      alert(error.response.data.details)
    }
	}
};

export { signIn, signUp };
