var db = require('monk')('localhost/guild');
var loot = db.get('loot');

module.exports = {
  all: function(){
    return loot.find({});
  },
  byId: function(id){
    return loot.findById({_id:id});
  },
  byPlayerId: function(id){
    return loot.find({'players_id':id});
  },
}
