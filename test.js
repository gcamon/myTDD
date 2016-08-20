'use strict';
var chai = require('chai');
var assert = chai.assert;
var NoteApp = require('./lib/noteapplication.js');
var Note = require('./lib/note.js');

describe('Notes creation works correctly',function(){
	var noteContent = new Note(1,'obinna','i have a dream');
	it('Should make sure the correct type of input is passed.',function(){					
		assert(noteContent.id === 1);
		assert(noteContent.author === 'obinna');
		assert(typeof noteContent.id === 'number');
		assert(typeof noteContent.content === 'string');
	})

})

describe('Note application increments number of notes as notes are added ',function(){
	var noteApp = new NoteApp('obinna');		
	noteApp.allNotes = [];	

	it('increments noteApp.length if created',function(){
		var note = new Note(1,'obinna','i have a dream');
		noteApp.create(note);
		assert( noteApp.allNotes.length === 1);
	})
	

	it('gets note contents by id',function(){
		var note = new Note(1,'obinna','i have a dream');
		noteApp.create(note);
		assert(noteApp.allNotes.length === 2);
		var get = noteApp.get(2);		
		assert(get.id === 2);		
	})
	
	it('Search the note list for a particular content the search param matches',function(){		
		var note = new Note(1,'obinna','i have a dream');
		noteApp.create(note);
		var result = noteApp.search('i have a dream');
		assert(result.length > 1);
	})


	it('deletes note content @ index of the allNotes list',function(){		
		var deleted = noteApp.delete(2);		
		assert(deleted === 'note deleted successfully!');
	})

	it('should edit note at a particular id of the note content',function(){
		noteApp.edit(2,'my life');
		var edited = noteApp.allNotes[0].content;		
		assert( edited === 'my life');
	})



})



