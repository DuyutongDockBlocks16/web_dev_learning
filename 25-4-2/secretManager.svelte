<script>
    let password = '';
    let messageToShow = '';

    // Function to determine whether the button should be enabled
    function isPasswordCorrect() {
        return password === "AW96B6" || password === "Alohomora";
    }

    // Function to display the message based on the password
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

<!-- Button that becomes enabled only if the correct password is entered -->
<button on:click={displayMessage} disabled={!isPasswordCorrect()}>Submit</button>

<!-- Display the message after the button is clicked -->
<p>{messageToShow}</p>
