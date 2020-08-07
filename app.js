const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());
//Middleware - Function that executes when routes are being hit
const notesRoute = require('./routes/note')

app.use('/notes', notesRoute);


//ROUTES
app.get('/', (req, res)=> {
    res.send('We are on home');
});


//Connect to database
db_user = process.env.DB_username;
db_password = process.env.DB_password;
const uri = `mongodb+srv://${db_user}:${db_password}@cluster0.emtro.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose.connect(uri,
{ useNewUrlParser: true, useUnifiedTopology: true } ,() => {
    console.log('Connected to DB')
});



app.listen(2000);



