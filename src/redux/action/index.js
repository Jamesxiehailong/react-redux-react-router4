export const chAction = (center) => ({
	type: 'CHANGE',
	data: center
})

export const loginAction = (username, islogin, issuper) => ({
	type: 'LOGIN',
	username: username,
	islogin: islogin,
	issuper: issuper
})