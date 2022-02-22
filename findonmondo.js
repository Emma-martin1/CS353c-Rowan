//const Card = require('./cards/Card')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//db uri is our key to the mongo atlasd database use the below code to connect to the database
const dbURI = "mongodb+srv://TeamRowan:ipOzz8isdphk79RL@cluster0.tggfz.mongodb.net/TeamRowan?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log("connected"))
    .catch((err) => console.log(err));

const heroSchema = new mongoose.Schema({
    name: String,
    nation: String,
    image: String,
    attack: String,
    defense: String
});//make a schema


//a model of the schema herp this makes a new collection of heros in the database
//because the "hero" in the brackets
const Hero = mongoose.model('Hero', heroSchema);
    

getTheCrap();
console.log("LOOKING FOR SOME CRAP");

async function getTheCrap() {
    //when you run this code the data will come back from db
    //finds all hero
    const heros = await Hero.find();
    //finds name thor
    const moreHeros = await Hero.find({ name: "Thor" }); 
    console.log(heros)
    console.log(moreHeros)
    console.log("GOT IT??")
  }
