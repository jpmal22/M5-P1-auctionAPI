const mongoose = require('mongoose');

//same model used for CLI application

const auctionItemSchema = new mongoose.Schema({
    title: String,
    description: String,
    start_price: Number,
    reserve_price: Number
}, { timestamps: true });

const AuctionItem = mongoose.model('AuctionItem', auctionItemSchema);

module.exports = AuctionItem;
