var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var LineSession = require('../../models/Session.js');


module.exports = (app) => {
    var session = require('../../controllers/session.controller.js');

    app.get('/api/sessions/', session.get_all_message);

    //拿到該使用者所有對話
    app.get('/api/sessions/:userid', session.get_messages_by_user_id);
    
    //儲存該使用者對話
    app.post('/api/session/', session.save_message);

    //刪除使用者所有該使用者對話
    app.delete('/api/sessions/:userid', session.delete_all_messsage);
   
};