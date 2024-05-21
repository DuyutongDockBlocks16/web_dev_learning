<script>
    let password = ''; // Reactive variable to store the password entered by the user

    // Function to check the password and return an appropriate message
    function checkPassword() {
        if (password === "AW96B6") {
            return "Impossible!";
        } else if (password === "Alohomora") {
            return "Opening up!";
        }
        return ""; // Return empty string if no special passwords are matched
    }
</script>

<!-- Password input field that's always visible -->
<input type="password" bind:value={password} placeholder="Enter your password" />

<!-- Display a message based on the password entered -->
<p>{checkPassword()}</p>
