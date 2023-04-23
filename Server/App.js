require('dotenv').config();
const express = require('express');
const cors = require ('cors');

require("./db/cone");
const PORT = process.env.PORT || 5000;
const app = express();
const start = async () => {
    try {
        app.listen(PORT);
        console.log("server start");
    } catch (error) {
        console.log(error);
    }
}
start();

//USE CORS TO RESOLVE CORS ERROR TO CONNECT API EXPRESS FOR UI
app.use(cors({
    origin: '*'   // * MEANING ( ALLOW ) ANYONE HIT THIS URL , OR FROM ANY URL API CAN BE ACCESED FROM ANY LANGUAGE
}));
const STUDENT = require("./models/students")
const studentRouter = require('./routers/student')


//var cors = require('cors')

//to show json post data in terminal
app.use(express.json());

// app.use(cookieParser());
//data in json form recognize
//app.use(cors()) // Use this after the variable declara

app.use(studentRouter);
//app.listen(PORT);
