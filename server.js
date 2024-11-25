// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route for chatbot API
app.post('/api/chat', async (req, res) => {
    const { userMessage } = req.body;

    if (!userMessage) {
        return res.status(400).json({ error: "User message is required" });
    }

    try {
        // Call Gemini API
        const response = await axios.post(
            'https://generativelanguage.googleapis.com', // Replace with the real API URL
            {
                query: userMessage
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
                    'Content-Type': 'application/json',
                }
            }
        );

        // Send Gemini API response back to the frontend
        res.json({ botResponse: response.data.reply });
    } catch (error) {
        console.error("Error calling Gemini API:", error.message);
        res.status(500).json({ error: "Failed to connect to Gemini API" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
