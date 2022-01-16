require('dotenv').config();
const express = require('express');
const app = express();
const monogoose = require('mongoose'); 
const cors = require("cors")

app.use(cors({origin: "*"}))
monogoose.connect("mongodb+srv://safespace:safespace@cluster0.ykymk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true});

const db = monogoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

app.use(express.json());

const mapRouter = require('./routes/map');
app.use('/map', mapRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

