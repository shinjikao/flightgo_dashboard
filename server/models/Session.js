var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    default: ''
  },
  user: {
    type: mongoose.Schema.Types.Mixed , ref: 'LineUser'
  },
  // user: Map,
  ask: Map,
  reply: Map
});

module.exports = mongoose.model('Session', SessionSchema);