<script>
    import { onMount } from 'svelte';
    import { initBooks } from '$lib/stores/books.svelte.js';

    onMount(() => {
        initBooks();
    });
</script>

<slot />