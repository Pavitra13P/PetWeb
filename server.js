const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "pet website" directory
app.use(express.static(path.join(__dirname, 'pet website')));

// Define routes for your HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pet website', 'index.html'));
});

app.get('/birds', (req, res) => {
    res.sendFile(path.join(__dirname, 'pet website', 'bird.html'));
});

app.get('/cats', (req, res) => {
    res.sendFile(path.join(__dirname, 'pet website', 'cat.html'));
});

app.get('/dogs', (req, res) => {
    res.sendFile(path.join(__dirname, 'pet website', 'dog.html'));
});

app.get('/fish', (req, res) => {
    res.sendFile(path.join(__dirname, 'pet website', 'fish.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
