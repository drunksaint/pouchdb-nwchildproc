console.log('starting child process');
var PouchDB = require('pouchdb');
// var pdb = new PouchDB('testlev');
require('pouchdb/extras/websql');
var pdb = new PouchDB('test', {adapter: 'websql'});
pdb.info().then(function(r){
    console.log(r);
    process.send(r);
}, function(e){
	console.log('error while getting info: ', e);
	process.send('error in child process while getting pouchdb info.');
	process.send(e);
});
process.on('message', function (m) {
    console.log('received message from parent: ', m);
    process.send(m);
});