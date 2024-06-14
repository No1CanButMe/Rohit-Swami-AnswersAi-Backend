const axios = require('axios');
require('dotenv').config();

const getAIResponse = async (prompt) => {
    try {
        // Just commenting the api call to one of openai api
        // const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        //     prompt: prompt,
        //     max_tokens: 150
        // }, {
        //     headers: {
        //         'Authorization': `Bearer ${process.env.CLAUDE_API_KEY}`
        //     }
        // });
        // return response.data.choices[0].text.trim();
        return "This is a mock response to the prompt: " + prompt;
    } catch (error) {
        console.error('Error communicating with AI service:', error);
        throw new Error('Failed to fetch response from AI service');
    }
};

module.exports = { getAIResponse };
