import * as api from '$lib/api.js';
import { respond } from './_respond';

export async function post({ request }) {
	const json = await request.json();
	console.log(json.email);
	const body = await api.post('auth/local', {
		identifier: json.email,
		password: json.password
	});

	return respond(body);
}
