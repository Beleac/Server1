// Require mongoose
const mongoose = require('./db/mongoose');

// Require Model
const Person = require('./models/person');

// Create new Person and store it in a variable of person
var person = new Person({
name: 'Batman',
age: 13,
// isFun: true
date: 07/25/19
});

person.save();