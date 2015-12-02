var db = require('monk')('localhost/guild');

var guild = db.get('guild');
var players = db.get('players');
var raid = db.get('raid');
var loot = db.get('loot');

//Seed the Guild
var vindicatum = guild.id();

//Seed the Players
var psarje = players.id(),
    hounds = players.id(),
    sep = players.id(),
    fyrst = players.id(),
    tan = players.id(),
    missy = players.id();

//Seed the Raid
var sunwell = raid.id();

Promise.all([
    guild.remove().then(function(){
        return Promise.all([
            guild.insert({_id: vindicatum, name: 'Vindicatum'})
        ])
    }),
    players.remove().then(function(){
        return Promise.all([
            players.insert({_id: psarje, name: 'Psarje'}),
            players.insert({_id: hounds, name: 'Hounds'}),
            players.insert({_id: sep, name: 'Sep'}),
            players.insert({_id: fyrst, name: 'Fyrst'}),
            players.insert({_id: tan, name: 'Tan'}),
            players.insert({_id: missy, name: 'Missy'})
        ])
    }),
    raid.remove().then(function(){
        return Promise.all([
            raid.insert({_id: sunwell, name: 'Sunwell'})
        ])
    }),
    loot.remove().then(function(){
        return Promise.all([
            loot.insert({players_id: psarje, raid_id: sunwell, item: '502 pants'}),
            loot.insert({players_id: psarje, raid_id: sunwell, item: 'Shadowmourne'}),
            loot.insert({players_id: hounds, raid_id: sunwell, item: 'Phoxes Lewtz'}),
            loot.insert({players_id: hounds, raid_id: sunwell, item: 'Warlock Stuff'}),
            loot.insert({players_id: sep, raid_id: sunwell, item: 'Tank Gear'}),
            loot.insert({players_id: sep, raid_id: sunwell, item: 'Healing Loot'}),
            loot.insert({players_id: fyrst, raid_id: sunwell, item: 'BIS Trinkets'}),
            loot.insert({players_id: fyrst, raid_id: sunwell, item: 'BIS Staff'}),
            loot.insert({players_id: tan, raid_id: sunwell, item: 'Repair Bots'}),
            loot.insert({players_id: tan, raid_id: sunwell, item: 'Ronald McDonald House'}),
            loot.insert({players_id: missy, raid_id: sunwell, item: 'Pumpkin Spice Latte'}),
            loot.insert({players_id: missy, raid_id: sunwell, item: 'Ugg Boots'})
        ])
    })
]).then(function(){
    db.close();
});