var PouchDB = require('pouchdb');
// var pdb = new PouchDB('testlev');
require('pouchdb/extras/websql');
var pdb = new PouchDB('test', {adapter: 'websql'});
pdb.info().then(function(r){
    console.log(r);
    process.send(r);
});
process.on('message', function (m) {
    console.log('received message from parent: ', m);
    process.send(m);
});