const express = require('express');
const fetch = require('node-fetch'); // Install using npm install node-fetch

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/get_events', async (req, res) => {
    try {
        const response = await fetch('https://www.eventbriteapi.com/v3/events/search', {
            method: 'GET',
            headers: {
                'Authorization': 'JAHDZJSOJSJOWOOZZSA', // Replace with your token
            },
        });
        const data = await response.json();
        res.json({ events: data.events });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
