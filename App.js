const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const contentful = require('contentful');

// customize  yargs version
yargs.version('1.1.0');

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
});

// create read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder:{
        title: {
                describe: 'read note',
                demandOption: true,
                type: 'string'
               }
            },
    handler(argv){
        notes.readNotes(argv.title);
    }
});

//create list command
yargs.command({
    command: 'List',
    describe: 'List your notes',
    handler(){
        notes.listNotes();
    }
});
yargs.parse();




