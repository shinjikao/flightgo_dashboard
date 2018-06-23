var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var LineUser = require('../../models/LineUser.js');


module.exports = (app) => {
    var user = require('../../controllers/lineuser.controller.js');

    app.get('/api/lineuser/', user.get_all_line_user);

    //拿到該使用者所有對話
    app.get('/api/lineuser/:user_id', user.get_line_user);
    
    //儲存該使用者對話
    app.post('/api/lineuser/', user.save_line_user);

    //刪除使用者所有該使用者對話
    app.delete('/api/lineuser/:user_id', user.delete_line_user);
   
};