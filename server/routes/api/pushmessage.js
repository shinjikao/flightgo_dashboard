var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Order = require('../../models/Order.js');


module.exports = (app) => {
    var push = require('../../controllers/pushmessage.controller.js');


    // send message from backend
    app.post('/api/push/', push.send_message);
    
    
   
};