
// Import Express and the food store singleton.
const express = require("express");
const path = require("path");
const foodStore = require("./foodStore");

// Create the Express application.
const app = express();

// Set the server port.
const PORT = 3001;

// Middleware to allow the server to read JSON requests.
app.use(express.json());

console.log("JSON middleware configured.");

// Serve frontend files from the public folder.
app.use(express.static(path.join(__dirname, "../public")));

// GET route to retrieve all food items.
app.get("/foods", (req, res) => {
    console.log("GET /foods request received.");

    const foods = foodStore.getAll();

    console.log("Food items returned:", foods);

    res.json(foods);
});

// Handle requests to routes that do not exist.
app.use((req, res) => {
    console.log("404 - Route not found:", req.method, req.url);

    res.status(404).json({
        error: "Route not found"
    });
});


// Start the server only when this file is run directly.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}

// Export the app for testing.
module.exports = app;