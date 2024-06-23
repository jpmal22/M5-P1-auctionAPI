const express = require('express');
const mongoose = require('mongoose');
const app = express();
const AuctionItem = require('./models/AuctionItem');

//sets up the view engine and use embedded js
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); 

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/auctioncli');

// Search form route
app.get('/', (req, res) => {
    res.render('index');
});

app.use(express.static('public'));

// Handle search query
// uses $or operator to search regular expression of search word is in title or description
//returns list of items or displays no items found
app.post('/search', async (req, res) => {
    const searchQuery = req.body.searchQuery;
    try {
        const items = await AuctionItem.find({
            $or: [
                { title: { $regex: searchQuery, $options: 'i' } },
                { description: { $regex: searchQuery, $options: 'i' } }
            ]
        });
        res.render('results', { items, searchQuery });
    } catch (err) {
        console.error('Search error:', err);
        res.status(500).send('Error performing the search');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
