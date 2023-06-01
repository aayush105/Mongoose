//jshint esversion:6

const mongoose = require("mongoose");

// Connect URL and database
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// creating schema and validating the data
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Please check your data entry, no name specified!"]
    },
    score: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// creating the model
const Fruit = mongoose.model("Fruit", fruitSchema); // here Fruits(singular) will be converted into fruits(plural)


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit : fruitSchema   // embedding the fruit schema
});

const Person = mongoose.model("Person", personSchema); // here person(singular) will be converted to the people(plural)

// inserting the data into DB of fruit schema
const fruit = new Fruit ({
    score: 8,
    review: "this fruit is great"
});

// to save the data into DB
// fruit.save();


// inserting many data into DB
const pineapple= new Fruit({
    name: "Pineapple",
    score:9,
    review: "Great fruit"
}); 
// pineapple.save();

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

// Fruit.insertMany([orange, mango, melon]); 



// inserting the data into DB of person schema using embedded documents

const person = new Person({
    name: "Aayush shrestha",
    age: 23,
    favouriteFruit: pineapple //embedding the data 
});

// person.save();

/*
//updateing the data to add fav fruit
async function updateData() {
    try {
      await Person.updateOne({_id: "64788d21cbafb6b378cf4b66"}, {favouriteFruit: mango});
      console.log("Successfully updated");
    } catch (err) {
      console.error(err);
    }
  }
  updateData();
*/

/*
// reading the inserted data from the database
//new version of mongoose
async function queryData() {
    try {
      const result = await Fruit.find();
      console.log('Query result:', result);
    } catch (error) {
      console.error('Error querying data:', error);
    }
  }
  queryData();
 */

// reading the name of all the data
async function queryData() {
    try {
        const result = await Fruit.find(); // o/p : fruits
        // loop through each item
        result.forEach(function(fruit){ 
        console.log(fruit.name);
        mongoose.connection.close(); // to close the connection to DB
      });
    } catch (error) {
      console.error('Error querying data:', error);
    }
  }
  queryData();

/*
// update the data into DB
  async function updateData() {
    try {
      await Fruit.updateOne({_id: "647899b05f602c052bd8c2c2"}, {name: "Peach"});
      console.log("Successfully updated");
    } catch (err) {
      console.error(err);
    }
  }
  updateData();

  // delete the data from DB
  async function deleteData(){
    try{
        await Fruit.deleteOne({ name: "Peach" }); // use "deleteMany" to delete many datas
        console.log("Successfully deleted");
    } catch(err) {
        console.error(err);
    }
  }
  deleteData();
  
*/


// new version of mongoose doesn't support call back function, use this if older version
// Fruit.find(function(err, fruits){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(fruits);
//     }
// });