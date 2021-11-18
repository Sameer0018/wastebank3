const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors')
const app = express();
var cookieParser = require('cookie-parser')

dotenv.config({ path: './config.env' });

require('./db/conn');
// const Registration = require('./modal/registrationSchema');

app.use(cookieParser())
app.use(express.json());
app.use(cors());


//we link the router file to make our route easy
app.use(require('./router/auth'))



const PORT = process.env.PORT ||5000;






app.get('/team', (req,res) => {
    res.send(`hello team page`)
})

app.get('/signup', (req, res) => {
    res.send(`hello registration world, this is signup page`);
})

app.get('/signin', (req, res) => {
    res.send(`hello login world, this is sign page`);
})


if (process.env.NODE_ENV == "production") {

    app.use(express.static("client/build"));

    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })

}

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`)
})
module.exports = app;