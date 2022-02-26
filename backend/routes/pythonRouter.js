const express = require('express');
const bodyParser = require('body-parser');

const pythonRouter = express.Router();

//for python endpoint
pythonRouter.route('/')
.all((req,res,next) =>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Send two numbers in JSON file to Multiply');
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