'use strict';
var chai = require('chai');
var assert = chai.assert;
var NoteApp = require('./lib/noteapplication.js');
var Note = require('./lib/note.js');

describe('Notes creation works correctly',function(){
	it('Should make sure the correct type of input is passed.',function(){		
		var noteContent = new Note(1,'obinna','i have a dream');			
		assert(noteContent.id === 1);
		assert(noteContent.author === 'obinna')
		assert(typeof noteContent.id === 'number');
		assert(typeof noteContent.content === 'string');
	})
})

describe('Note application increments number of notes as notes are added ',function(){
	var noteApp = new NoteApp('obinna');		
	noteApp.allNotes = [];

	it('identifies the note list is empty',function(){		
		assert(noteApp.allNotes.length === 0);
	})

	it('increments noteApp.length if created',function(){
		//create a note and pass it to create method
		//assert that length of allNotes array is 1
		var note = new Note(1,'obinna','i have a dream');
		noteApp.create(note);
		assert( noteApp.allNotes.length === 1);
	})

	it('increments array by 1',function(){
		assert(noteApp.allNotes.length === 1);
	})

	it('gets note contents by id',function(){
		//create a note and pass it to create method
		//assert that length of allNotes array is 1
		//make a call to get method, so as to return a note object
		//assert that the id of the returned note object equals the id passed when creating nolte obj
		var note = new Note(1,'obinna','i have a dream');
		noteApp.create(note);
		assert(noteApp.allNotes.length === 2);
		var get = noteApp.get(2);		
		assert(get.id === 2);		
	})
	it('should return true if created',function(){

		assert(noteApp.delete("i have a dream") === true);
	})

	it('should return true if created',function(){
		assert(noteApp.edit("i have a dream") === true);
	})
})



