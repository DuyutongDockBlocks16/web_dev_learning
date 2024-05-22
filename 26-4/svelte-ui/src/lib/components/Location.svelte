<script>
    import { useLocationStore } from "$lib/stores/location.svelte.js";

    const locationStore = useLocationStore();
</script>

<p>At ({locationStore.location.x}, {locationStore.location.y})</p>
