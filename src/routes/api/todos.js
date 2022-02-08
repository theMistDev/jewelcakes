export async function get() {
	const res = await fetch('http://localhost:1337/api/todos');
	const data = await res.json();

	return { body: data };
}



export async function post() {
	try {
		const res = await fetch('http://localhost:1337/api/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({
				todo
			})
		});
		const data = await res.json();
		// enter you logic when the fetch is successful
		console.log(data);
	} catch (error) {
		// enter your logic for when there is an error (ex. error toast)

		console.log(error);
	}
}
