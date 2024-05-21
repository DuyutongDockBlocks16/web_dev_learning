<script>
  // Exporting `message` makes it a prop that can be passed into the component
  export let message = 'world'; // Default value is 'world'
</script>

<!-- Use the message prop in the HTML template -->
<h1>Hello {message}!</h1>