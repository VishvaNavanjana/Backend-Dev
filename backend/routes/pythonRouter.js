const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const pythonRouter = express.Router();

//for python endpoint
pythonRouter.route('/')
.all((req,res,next) =>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    request('http://127.0.0.1:5000/getRandomNumber', (error, response, body) => {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
    });
})
.post((req,res,next) => {
    /* ---------------------------
    JSON object should be
    {
        "num1": int,
        "num2": int
    }
    When receive JSON object,
    pass the two numbers to python backend and get the result
    Then send the result to client
    --------------------------- */
    
    res.end('Sum of two: ' + req.body.num1 +' + '+  req.body.num2 +" = " + (req.body.num1 + req.body.num2));
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /python');
})
.delete((req,res,next) => {
    res.end('DELETE operation not supported on /python');
});

//export the pythonRouter
module.exports = pythonRouter;