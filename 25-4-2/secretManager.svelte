<script>
    let password = '';
    let messageToShow = '';
    function isPasswordCorrect() {
        return password === "AW96B6" || password === "Alohomora";
    }
    function displayMessage() {
        if (password === "AW96B6") {
            messageToShow = "Impossible!";
        } else if (password === "Alohomora") {
            messageToShow = "Opening up!";
        }
    }
</script>
<label for="password">Enter the secret password:</label>
<input id="password" type="password" bind:value={password} />
<button on:click={displayMessage} disabled={!isPasswordCorrect()}>Submit</button>
<p>{messageToShow}</p>
