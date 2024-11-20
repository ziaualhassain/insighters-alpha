const axios = require('axios');
const uri = 'https://newsdata.io/api/1/news?apikey=pub_59357f24f29cc5b41e15afe98af5a2cfc3d57&q=india&country=in&language=en';

const newsArticlesSource1 = [];

async function retrieveArticles() {
    try {
        const response = await axios.get(uri);
        const articles = response.data.results; // Assuming `results` contains the articles
        console.log('Fetched articles:', articles);

        newsArticlesSource1.push(...articles); // Add new articles to the array
        console.log('Stored articles:', newsArticlesSource1);
    } catch (error) {
        console.log('Error during API request:', error.message);
    }
}

// Run the function every 10 seconds
setInterval(retrieveArticles, 60000);

// Export as a function to get articles safely
module.exports = {
    getNewsArticles: () => [...newsArticlesSource1], // Return a copy of the array to avoid direct mutation
};
