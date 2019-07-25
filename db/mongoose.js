const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://Caeleb:ucode@dsdb-cqivl.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(connectionString, {useNewUrlParser : true, useFindAndModify: false})
    .then(() => {
        console.log('Successully connected to MonogoDB Atlas!')
    })
    .catch((error) => {
        console.log(`Unable to connect to MongoDB Atlas!`)
        console.log(error);
    })

module.exports = mongoose;

// const quotes = [
//     {quote: 'The power of the dark side', id: 1},
//     {quote: 'I hate you', id: 2},
//     {quote: 'Get to the choppa', id: 3},
//     {quote: 'This is so confusing', id: 4},
//     {quote: 'I missed a semi-colon', id: 5},
//     {quote: 'Why are we still here? Just to suffer', id: 6},
// ];

// module.exports = quotes;

// console.log(`"I never learned how to spell" - Zeeshawn 2019`)