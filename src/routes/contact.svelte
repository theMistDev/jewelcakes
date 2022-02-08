<script>
	let name;
	let email;
	let phone;
	let options = [];
	let optionsList = [
		'I want to make an Order',
		'I want a to Learn How to Bake',
		'I have some enquiries',
		'I have a feedback',
		'Other'
	];
	console.log(options);
</script>

<div class="grid md:grid-cols-2 grid-cols-1 bg-blue-200">
	<div class=" md:col-span-1 pt-5 grid justify-around items-center ">
		<div>
			<h3 class="pl-5 text-2xl text-center md:text-left font-bold">Contact Us Form</h3>
			<h4 class="pl-5 text-lg">
				Please fill this form and we would be in touch
				ASAP.
			</h4>
		</div>

		<form class="px-5 flex flex-col items-center justify-around py-3 max-w-md ">
			<input
				class="rounded px-3 my-2 py-2 w-full"
				type="text"
				name=""
				id=""
				placeholder="Name"
				bind:value={name}
			/>

			<input
				class="rounded px-3 my-2 py-2 w-full"
				type="text"
				name=""
				id=""
				placeholder="Email Address"
				bind:value={email}
			/>

			<input
				class="rounded px-3 my-2 py-2 w-full"
				type="text"
				name=""
				id=""
				placeholder="Phone Number"
				bind:value={phone}
			/>

			<div class="border rounded flex flex-col w-full px-3 py-2 ">
				Please select at least one option.

				{#each optionsList as item}
					<label>
						<input type="checkbox" bind:group={options} name="scoops" value={item} />
						{item}
					</label>
				{/each}
			</div>

			<textarea
				class="p-3 my-3 rounded"
				name=""
				id=""
				cols="40"
				rows="5"
				placeholder="Please enter your message here."
			/>

			<button class="border text-stone-50 border-stone-700 bg-stone-900/70 dark:border-stone-200 shadow-sm hover:shadow-lg hover:bg-stone-500/70 active:shadow-none rounded px-3 py-2 w-full my-2 transition transform hover:-translate-y-0.5">Submit</button>
		</form>
	</div>

	<div class="md:col-span-1 pt-5 grid justify-around items-center w-full">
		<div class="px-3 flex flex-col py-3  max-w-md  justify-around items-center place-items-center">
			<div>
				<h4 class="font-bold">We can talk on Social Media</h4>
			</div>
			<div class="w-full">
				<button class="border text-stone-50 border-stone-700 bg-stone-900/70 dark:border-stone-200 shadow-sm hover:shadow-lg hover:bg-stone-500/70 active:shadow-none rounded px-3 py-2 w-full my-2 transition transform hover:-translate-y-0.5 ">Instagram</button>
				<button class="border text-stone-50 border-stone-700 bg-stone-900/70 dark:border-stone-200 shadow-sm hover:shadow-lg hover:bg-stone-500/70 active:shadow-none rounded px-3 py-2 w-full my-2 transition transform hover:-translate-y-0.5">Facebook</button>
				<button class="border text-stone-50 border-stone-700 bg-stone-900/70 dark:border-stone-200 shadow-sm hover:shadow-lg hover:bg-stone-500/70 active:shadow-none rounded px-3 py-2 w-full my-2 transition transform hover:-translate-y-0.5">Twitter</button>
			</div>
		</div>
	</div>
</div>
