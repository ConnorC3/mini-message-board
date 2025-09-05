const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello Wolrd");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});