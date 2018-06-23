var mongoose = require('mongoose');

var LineUserSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  email: String,
  gender: String,
  phone_number: Number,
  picture_url: String,
  createdtime: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Member', LineUserSchema);

  // {
  //   "_id": {
  //       "$oid": "5b2be3e3159c1d00049f43df"
  //   },
  //   "user_id": "U3c85a6aee17d4e707b2d88e46e41aad8",
  //   "name": "Jackalkao",
  //   "email": "Aa@aa.xx",
  //   "gender": "男性",
  //   "phone_number": "11111",
  //   "picture_url": "http://dl.profile.line-cdn.net/0m0e4aece97251c359cd788050c37794d45a22cd7eeabb"
  // }

  