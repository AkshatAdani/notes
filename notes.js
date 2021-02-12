const fs = require('fs');
const chalk = require('chalk');


function addNotes(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.find((note)=>note.title === title);
    if (!duplicateNotes){
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.bgBlue('New note added!'));
    
    }
    else{
        console.log(chalk.bgRed('Note title taken!'));
    }
}

function removeNotes(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if(notesToKeep.length === notes.length){
        console.log(chalk.bgRed('No Note Found'));
}   
    else{
        console.log(chalk.bgGreen('Note Removed!'));
        saveNotes(notesToKeep);
    }
}

function listNotes(){
    const notes = loadNotes();
    console.log(chalk.inverse.blueBright("Your Notes"));
    notes.forEach((note)=>{
        console.log(note.title);
    });
}

function readNotes(title){
    const notes = loadNotes();
    const readNote = notes.find((note) => note.title ===  title);
    debugger
    if(readNote){
        console.log(chalk.blueBright.inverse(readNote.title + readNote.body));
    }
    else{
        console.log(chalk.red.inverse('Note not found!'));
    }
}

    

function saveNotes(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

function loadNotes(){
    try{
        const bufferData = fs.readFileSync('notes.json');
        const dataJSON = bufferData.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
    
}



module.exports = {
addNotes,
removeNotes, 
listNotes,
readNotes
};
 

    





    
