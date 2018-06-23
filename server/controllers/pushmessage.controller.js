var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Cleaner = require('../models/Cleaner.js');
const Order = require('../models/Order.js');
const User = require('../models/User.js');

const line = require('@line/bot-sdk');

const config = {
  channelAccessToken: 'O3kDD5t80yC4I8bCWHUsp0DRRm2ZVl/Y5n2mBKczD4bIxbedCF8CA2B6fSNu0/12jO5k0wbp8etkBa6HVwb6T2a5jCQOOMKovAqq7dbJ0hTUoxfez+u5scFr5xWrH2hjxmu9ZcjKmrK7x9alXFSiTgdB04t89/1O/w1cDnyilFU=',
  channelSecret: '3e4adf55ff56402454852e729b026244'
};


const client = new line.Client(config);
line.middleware(config);

/* PUSH MESSAGE */
exports.send_message = function (req, res, next) {
    
    const {body} = req;
    console.log(body)
    let user = body.userid1;
    let message = body.message1;
    
    // userId = 'U3c85a6aee17d4e707b2d88e46e41aad8'
    client.pushMessage(user, { type: 'text', text: message });
    return res.status(200);
};



