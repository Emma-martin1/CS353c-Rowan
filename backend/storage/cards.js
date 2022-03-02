const mongoose = require('./db');

const cardSchema = new mongoose.Schema({
    name: String,
    nation: String,
    image: String,
    attack: String,
    defense: String
})

const Card = mongoose.model('Card', cardSchema);

module.exports = { Card: Card, cardSchema: cardSchema }
