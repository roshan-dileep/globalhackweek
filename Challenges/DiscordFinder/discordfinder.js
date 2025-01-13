const axios = require('axios');

const API_KEY = 'your-hypixel-api-key'; // Replace with your Hypixel API key

async function getPlayerSocialMedia(playerName) {
    try {
        const response = await axios.get(`https://api.hypixel.net/player`, {
            params: {
                key: API_KEY,
                name: playerName
            }
        });

        const player = response.data.player;
        if (player && player.socialMedia) {
            return player.socialMedia;
        } else {
            return "Player or social media info not found.";
        }
    } catch (error) {
        console.error(error);
        return "An error occurred while fetching player data.";
    }
}

// Example usage:
const playerName = "somePlayer"; // Replace with user input
getPlayerSocialMedia(playerName).then(console.log);