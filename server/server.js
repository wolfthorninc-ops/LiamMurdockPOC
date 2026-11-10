
const app = require("./app");

// Use the deployment port or default to 3000.
const PORT = process.env.PORT || 3000;

// Start the Express server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
