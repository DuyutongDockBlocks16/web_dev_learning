<script>
    let password = '';
    function checkPassword() {
        if (password === "AW96B6") {
            return "Impossible!";
        } else if (password === "Alohomora") {
            return "Opening up!";
        }
        return "";
    }
</script>
<input type="password" bind:value={password} placeholder="Enter your password" />
<p>{checkPassword()}</p>
