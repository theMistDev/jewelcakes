<script context="module">
	export function load({ session }) {
		if (!session.user) {
			return {
				status: 302,
				redirect: `/login`
			};
		}

		return {};
	}
</script>


<script>

	import { session } from '$app/stores';

	

	import { get } from '../api/todos';


</script>


{#if $session.user !== null}
	<p>Welcome {$session.user.username}</p>
{/if}
