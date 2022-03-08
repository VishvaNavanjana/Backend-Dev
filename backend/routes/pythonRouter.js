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

    // const options = {
    //     url: 'http://127.0.0.1:5000/getRandomNumber',
    //     method: 'GET'
    // };

    // request(options, (error, response, body) => {
    //     console.error('error:', error); // Print the error
    //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //     console.log('body:', body); // Print the data received
    //     res.send(body); //Display the response on the website
    // });
})
.post((req,res,next) => {

    // console.log(req.body);

    // // request to "/flower" endpoint in python backend
    // const options = {
    //     url: 'http://127.0.0.1:5000/flower',
    //     json: true,
    //     body: req.body
    // };
 
    // request.post(options, (error, response, body) => {
    //     console.error('error:', error); // Print the error
    //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //     console.log('body:', body); // Print the data received
    //     res.send(body); //Display the response on the website
    // });
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