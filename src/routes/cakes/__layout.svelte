<script>
	let cakeTypes = [
		{ href: '/', title: 'Butter Cream' },
		{ href: '/cakes', title: 'Desserts' },
		{ href: '/pastries', title: 'Birthdays' },
		{ href: '/gift', title: 'Weddings' },
		{ href: '/school', title: 'Cake School' },
		{ href: '/contact', title: 'Contact' }
	];
</script>

<nav class="flex  py-1 flex-row bg-red-100 flex-wrap justify-around items-center shadow-md header sticky z-40  inset-24">
    {#each cakeTypes as cakeType }

    <a class="rounded-lg border bg-purple-300  px-4 py-2" href={cakeType.href}>{cakeType.title}</a>

    {/each}
</nav>

<slot />
