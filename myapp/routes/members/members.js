var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/guild');
var guild = db.get('guild');
var players = db.get('players');
var raid = db.get('raid');
var loot = db.get('loot');
var members = require('../../lib/players.js');
var loots = require('../../lib/loot.js');

/* GET members  page. */
router.get('/', function(req, res, next) {
  var membersArr = [];
  members.all().then(function(mmbrs){
    mmbrs.forEach(function(index){
      membersArr.push(index);
    })
  }).then(function(){
    console.log(membersArr);
    res.render('members/members', {horse: membersArr});
    })
});

 /* GET individual info page */
router.get('/:id', function(req, res, next) {
  var specificMember = [];
  var allDeLoot = [];
  var importantVariable = req.params;
  members.all().then(function(plyr){
    for (var i = 0; i<plyr.length; i++) {
      if(importantVariable.id == plyr[i]._id){
        specificMember.push(plyr[i]);
      }
    };
  }).then(function(){
    var promises = loots.byPlayerId(specificMember[0]._id).then(function(lewtz){
      allDeLoot.push(lewtz);
    }).then(function(){
      var specCharLoot = allDeLoot.pop()
      console.log(specCharLoot);
      res.render('members/show', 
        {showVariable: specificMember,
          lootVariable: specCharLoot}
        );
      })
    });
});

module.exports = router;