const 
    express = require("express"),
    app = express(),
    mongoose = require('./db/mongoose'),
    Person = require('./models/person'),
    bodyParser = require('body-parser'),
    path = require('path')
    port = process.env.PORT || 8000;

    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(__dirname + '/public'));

    app.listen(port, err => {
        console.log(err || `Listening to server on port: ${port}`);


    });

    app.post('/person', async (req, res) => {
       console.log(req.body); 

         var person = new Person({
         name: 'Zeeshan A',
         age: 13,
         isFun: true
         });

         person.save();

    res.status(200).send(person)
    //    var person = new Person({
    //     name: 'Zeeshan A',
    //     age: 13,
    //     isFun: true
    //     });
    });

    // var id = 7;

    //ROUTES
        // ROOT/HOME Route
        // app.get('/', (req, res) => {
        //     res.json({'success': true});

        // });

        // // (Read All) INDEX: load ALL quotes
        // app.get('/quotes', (req, res) => {
        //     res.json({'success': true, quotes});

        // });
        // //( Read One)FIND/SHOW: one specific quote
        // app.get('/quotes/:id', (req, res) => {
        //     let quote = quotes.find(x => x.id == req.params.id);
        //     res.json({'success': true, quote});
        // });
        // // CREATE: quote
        // app.post('/quotes', (req, res) => {
        //     quotes.push({...req.body, id});
        //     id++;
        //     res.json({'success': true, quotes});
        // });
        // // UPDATE quote
        // app.patch('/quotes/:id', (req, res) => {
        //     let quote = quotes.find(x => x.id == req.params.id);
        //     quotes.quote = req.body.quote;
        //     res.json({'success': true, 'message': 'Updatated', quote});

        // })
        // // DELETE quote



































































































































































































console.log(`"If you dont like Spaghet that's illegal" - ZeeShawn 2019`);