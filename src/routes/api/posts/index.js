export async function get(request) {
	const endpoint = await request.url.pathname;
	const url = 'https://mistdev.herokuapp.com' + endpoint;
	const res = await fetch(url);
	console.log(url);
	const data = await res.json();

	return { body: data };
}
