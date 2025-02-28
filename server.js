require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public")); // Serves your frontend files from the "public" folder

app.get("/config", (req, res) => {
    res.json({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
