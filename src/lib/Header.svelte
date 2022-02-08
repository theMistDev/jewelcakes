<script>
	import { post } from '$lib/utils.js';

	import { goto } from '$app/navigation';
	import { page, session } from '$app/stores';

	let navItems = [
		{ href: '/', title: 'Home' },
		{ href: '/cakes', title: 'Cakes' },
		{ href: '/pastries', title: 'Pastries' },
		{ href: '/gift', title: 'Gift Shop' },
		{ href: '/school', title: 'Cake School' },
		{ href: '/contact', title: 'Contact' }
	];

	let toggled = false;
	const menuToggle = () => {
		toggled = !toggled;
	};

	async function logout() {
		await post(`api/auth/logout`);

		// this will trigger a redirect, because it
		// causes the `load` function to run again

		$session.user = null;
		goto('/');
	}


	let dropDown = false;
	const profileDrop = () => {
		dropDown = !dropDown;
		console.log(dropDown);
	};

	console.log($session.user);
</script>




<header class=" w-full  dark:bg-gray-800 bg-red-200/95 shadow-md header sticky z-40 inset-0">
	<div
		class="
          flex flex-col

          p-5
          mx-auto
          md:items-center md:justify-between md:flex-row md:px-6
          lg:px-8
        "
	>
		<div class="flex flex-row items-center justify-between lg:justify-start">
			<a
				href="/"
				class="
              text-lg
              font-bold
              tracking-tighter
              text-blue-600
              transition
              duration-500
              ease-in-out
              transform
              tracking-relaxed
              lg:pr-8"
			>
				<img class="w-40" src="jewelcakes-logo.png" alt="">
			</a>
			<button
				on:click|preventDefault={menuToggle}
				class="rounded-lg md:hidden focus:outline-none focus:shadow-outline bg-red-300"
			>
				<svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8">
					<path
						x-show="!open"
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
					<path
						x-show="open"
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
						style="display: none;"
					/>
				</svg>
			</button>
		</div>
		<nav
			class="flex-col items-center flex-grow pb-4 border-blue-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2 {toggled ===
			true
				? 'flex'
				: 'hidden'}"
		>
			{#each navItems as item}
				<button on:click ={()=>{goto(item.href); toggled=false}}
					class="
              px-4
              py-2
              mt-2
              text-sm text-gray-500 rounded-lg
              md:mt-0
              hover:text-blue-600
              focus:outline-none focus:shadow-outline {item.href === $page.url.pathname ? 'bg-blue-200': ''}
            "
				>{item.title}</button
				>
			{/each}


			<div class="inline-flex items-center gap-2 list-none lg:ml-auto">
				{#if $session.user === null }
					<a href="/login"
					class="
                items-center
                block
                px-8
                py-2.5
                text-base
                font-medium
                text-center text-blue-600
                transition
                duration-500
                ease-in-out
                transform
                border-2 border-white
                shadow-md
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-gray-500
              "
				>
					Sign in
				</a>

				<a href="/register"
					class="
                items-center
                block
                px-8
                py-3
                text-base
                font-medium
                text-center text-white
                transition
                duration-500
                ease-in-out
                transform
                bg-blue-600
                rounded-xl
                hover:bg-blue-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-blue-500
              "
				>
					Sign up
				</a>

				{/if}

			</div>
		</nav>
	</div>
</header>
