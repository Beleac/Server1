// Require mongoose
const mongoose = require('./db/mongoose');

// Require Model
const Person = require('./models/person');

//   // Create new Person and store it in a variable of person
// var person = new Person({
// name: 'Zeeshan A',
// age: 13,
// isFun: true
// });

// person.save();

// const findDocs = async() => {
//     console.log('Finding Documents in Database');

//     const results = await Person.find({isFun: true});

//     console.log(results);
// }
// findDocs();

// const updateDocs = async () => {
//     console.log(`Updating documents in Database`)
//     //Update Many Below
//         // const results = await Person.updateMany({isFun : true}, {isFun: false});
//     //Update and find one
//     const results = await Person.findOneAndUpdate({isFun: false}, {isFun: true})
//     console.log(results);
// }
// updateDocs();

// const deleteDocs = async () => {
//     console.log('Deleting Documents in Database')

//     await Person.findOneAndDelete({name: 'Julian K'});
// };

// deleteDocs();

