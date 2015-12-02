var db = require('monk')('localhost/guild');
var players = db.get('players');

module.exports = {
  all: function(){
    return players.find({});
  },
  byId: function(input){
    return players.findById(input);
  },
}