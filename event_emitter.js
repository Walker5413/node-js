const events = require('events');
// ***helps to inherit
const util = require('util');

const teams = function(name){
    this.name = name;
};

util.inherits (teams, events.EventEmitter);

const Arsenal = new teams('Arsenal');
const Juventus = new teams('Juventus');
const Galatasaray = new teams('Galatasaray');

const teamArray = [Arsenal, Juventus, Galatasaray];

teamArray.forEach((team) => {
    team.on('nation', function(nation){
        console.log(team.name + ' is ' + nation + ' football club ');
    });
});

Arsenal.emit('nation', 'English');
Juventus.emit('nation', 'Italian');
Galatasaray.emit('nation', 'Turkish');