var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Session = require('../models/Session.js');
const LineUser = require('../models/LineUser.js')

exports.get_all_message = function (req, res, next) {
  console.log('#get all user messages');
  Session.find({}, (err, sessions) => {
    if (err) {
      return res.status(400).send({
        success: false,
        message: 'Error: server error'
      });
    }
    return res.status(200).json(sessions);
  });
}

exports.get_messages_by_user_id = function (req, res, next) {
  console.log('#get all msg1');

  if (!req.params.userid) {
    return res.status(400).send({
      success: false,
      message: 'Error: no userid.'
    });
  }
  userid = req.params.userid
  console.log(userid);

  //find session collection from db
  Session.find({
    user_id: userid
  }, (err, sessions) => {
    if (err) {
      return res.status(400).send({
        success: false,
        message: 'Error: server error'
      });
    }
    return res.status(200).json(sessions);
  });
  // return res.status(200).json(userid);
}

exports.save_message = function (req, res, next) {
  console.log('#save msg');
  const { body } = req;

  let {
    user_id
  } = body;

  let {
    ask
  } = body;

  let {
    reply
  } = body;

  //check param
  if (!user_id) {
    return res.status(400).send({
      success: false,
      message: 'Error: no userid.'
    });
  }

  if (!ask) {
    return res.status(400).send({
      success: false,
      message: 'Error: no eventType.'
    });
  }

  if (!reply) {
    return res.status(400).send({
      success: false,
      message: 'Error: no eventType.'
    });
  }
  //insert to mongodb , Save the message of user
  const session = new Session();
  session.user_id = user_id;
  LineUser.find({
    user_id: user_id
  }, (err, user) => {
    if (err) {
      return 'error';
    }
    session.user = {
      "name" : user[0].name,
      "email" : user[0].email
    };
    session.ask = ask;
    session.reply = reply;
    
    session.save((err, s) => {
      if (err) {
        return res.status(400).send({
          success: false,
          message: 'Error: Server error .' + err
        });
      }
      return res.status(201).json(s);
    });
  });
}

exports.delete_all_messsage = function (req, res, next) {
  return res.status(200);
}

