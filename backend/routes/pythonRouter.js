const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');
const axios = require('axios');

const pythonRouter = express.Router();

pythonRouter.use(bodyParser.json());

//for python endpoint
pythonRouter.route('/')
.all((req,res,next) =>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {

    axios.get('http://127.0.0.1:5000/getRandomNumber')
    .then((responseFromPython) => {
        console.log(responseFromPython.data);
        res.send({number: responseFromPython.data})
    })
})
.post((req,res,next) => {
    axios.post('http://127.0.0.1:5000/flower', req.body)
    .then((responseFromPython) => {
        res.send({prediction: responseFromPython.data});
    });

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