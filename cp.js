var PouchDB = require('pouchdb');
require('pouchdb/extras/websql');
var pdb = new PouchDB('test', {adapter: 'websql'});
pdb.info().then(function(r){
    console.log(r);
})