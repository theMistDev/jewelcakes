<script context="module">
	export function load({ error, status}) {
		return { props: { error, status } };
	}
</script>

<script>
	export let error;
	export let status;
</script>



<div class="py-1">

<div class=" overflow-hidden h-screen">
    <img src="https://res.cloudinary.com/mistdev/image/upload/v1643868811/mistdev-error_bi3ann.png" alt="error"  class="absolute darken w-full object-cover"/>
    <div class="inset bg-black absolute opacity-25">
    </div>
    <div class="container bg-green-900/50 mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="w-full  font-mono flex flex-col items-center relative z-10">
            <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                You&#x27;re alone here
            </h1>
			<p class="text-2xl p-3">{error.message}</p>
			 <a href="/" class="rounded border px-5 py-2 bg-blue-800/50 shadow shadow-green-200 hover:shadow-lg hover:bg-blue-500/50">Let&#x27;s Go Home</a>
            <p class="font-extrabold text-8xl my-24 text-white animate-bounce">
                {status}</p>








        </div>
    </div>
</div>


</div>