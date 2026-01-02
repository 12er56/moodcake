// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// Sample API
app.get('/api/cakes', (req, res) => {
    res.json([
        { name: "Chocolate Cake", price: 500 },
        { name: "Vanilla Cake", price: 400 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
