import * as api from '$lib/api.js';
import { respond } from './_respond';

export async function post({ request }) {
	//let username; let email; let password;
	const user = await request.json();
	const username = await user.username;
	const email = await user.email;
	const password = await user.password;
	//console.log(user.username)

	// TODO individual properties
	const body = await api.post('auth/local/register', {
		username,
		email,
		password
	});

	return respond(body);
}
