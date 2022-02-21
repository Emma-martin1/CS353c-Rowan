//const Card = require('./cards/Card')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//db uri is our key to the mongo atlasd database use the below code to connect to the database
const dbURI = "mongodb+srv://TeamRowan:ipOzz8isdphk79RL@cluster0.tggfz.mongodb.net/TeamRowan?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log("connected"))
    .catch((err) => console.log(err));


//mogose requires a schema to upload the following is my scheam for a hero in the game
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

//add new heros by filling in the details here
const thor = new Hero({ name: "Thor", nation: "norse", image: "",attack: 'lightning',  defense:"morale boost +1 for all defensive troops"});
const inti = new Hero ({ name: "Inti", nation: "southamerican", image:"", attack: "sun burn", defense:"blinding rays +5 defense"});
 


console.log(thor.attack);

console.log(inti.nation);

console.log("Saving?");



addTheCrap()


async function addTheCrap() {
    //when you run this code the data will be saved try it with your data and see if it saves succesfully
    await thor.save();
    await inti.save();
    //after you run this code your data should be stored on the db

  }
