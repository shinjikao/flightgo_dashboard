var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const LineUser = require('../models/LineUser.js');


exports.get_all_line_user = function (req, res, next) {
  console.log('#get_all_line_user');
  LineUser.find({}, (err, users) => {
    if (err) {
      return res.status(400).send({
        success: false,
        message: 'Error: server error'
      });
    }
    return res.status(200).json(users);
  });
}

exports.get_line_user = function (req, res, next) {
  console.log('#get_line_user');
  if (!req.params.user_id) {
    return res.status(400).send({
      success: false,
      message: 'Error: no userid.'
    });
  }
  user_id = req.params.user_id
  console.log(user_id);

  LineUser.find({
    user_id: user_id
  }, (err, user) => {
    if (err) {
      return res.status(400).send({
        success: false,
        message: 'Error: server error'
      });
    }
    return res.status(200).json(user);
  });
}

exports.save_line_user = function (req, res, next) {
  console.log('#save_line_user');
  const { body } = req;
  const lineUser = new LineUser();
  lineUser.user_id = body.user_id;
  lineUser.name = body.name;
  lineUser.email = body.email;
  lineUser.gender = body.gender;
  lineUser.phone_number = body.phone_number;
  lineUser.picture_url = body.picture_url;
  lineUser.save((err, user) => {
    if (err) {
      return res.status(400).send({
        success: false,
        message: 'Error: Server error.'
      });
    }
    return res.status(201).json(user);
  });
}

exports.delete_line_user = function (req, res, next) {
  console.log('#delete_line_user');
  return res.status(200);
}



