<script>
    import { useLocationStore } from "$lib/stores/location.svelte.js";

    const locationStore = useLocationStore();
</script>

<table>
    <tbody>
    <tr>
        <td></td>
        <td>
            <button on:click={() => locationStore.up()}>Up</button>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>
            <button on:click={() => locationStore.left()}>Left</button>
        </td>
        <td>
            <button on:click={() => locationStore.down()}>Down</button>
        </td>
        <td>
            <button on:click={() => locationStore.right()}>Right</button>
        </td>
    </tr>
    </tbody>
</table>
