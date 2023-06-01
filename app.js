//jshint esversion:6

const mongoose = require("mongoose");

// Connect URL and database
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// creating schema
const fruitSchema = new mongoose.Schema({
    name: String,
    score: Number,
    review: String
});

// creating the model
const Fruit = mongoose.model("Fruit", fruitSchema); // here Fruits(singular) will be converted into fruits(plural)

// inserting the data into DB
const fruit = new Fruit ({
    name: "Appple",
    score: 8,
    review: "Great fruit"
});

// inserting many data into DB

const orange = new Fruit({
    name: "Orange",
    score: 7,
    review: "Sour taste"
});

const mango = new Fruit({
    name: "Mango",
    score: 9,
    review: "Love it!"
});

const melon = new Fruit({
    name: "Melon",
    score: 8,
    review: "Awesome taste"
});

Fruit.insertMany([orange, mango, melon]);



// to save the data into DB
//fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema); // here person(singular) will be converted to the people(plural)

const person = new Person({
    name: "Aayush",
    age: 23
});

//person.save();