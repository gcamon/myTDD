'use strict';

var Note = require('./note.js')

function NoteApplication(author) {
	this.author = author;
	this.allNotes = [];
}

NoteApplication.prototype.create = function (note_content) {
	note_content.author = this.author;	
	note_content.id++;			
	var note = new Note(note_content.id, note_content.author, note_content.content);	
	this.allNotes.push(note);			
	console.log('note created successfully, note id is: ' + note.id);	
}

NoteApplication.prototype.listNotes = function () {
	if(Object.prototype.toString.call( this.allNotes ) === '[object Array]' && this.allNotes.length > 1){
		this.allNotes.forEach(function (item) {
				console.log('note id : ' + item.id);
				console.log(item.content);
				console.log('Author by : ' + item.author);
		})
		
	} 
	
}

NoteApplication.prototype.get = function (note_id) {
	if( typeof note_id === 'number' && note_id > 0 ){
		var note;
		this.allNotes.forEach(function (item) {
			if(note_id === item.id) {
				note = item;
			}
		});

	} else {
		console.log('Invalid note id! Please enter a valid Number');
	}

	return note;
	
}

NoteApplication.prototype.search = function (search_text) {
	if(typeof search_text === 'string'){
			var found = [];						
			this.allNotes.forEach(function(item){				
				if(item.content.indexOf(search_text) !== -1){
					console.log('Note Id : ' + item.id);
					console.log(item.content);
					console.log('Author by : ' + item.author);
					found.push(item);
				} else {
					console.log('No such content availabe');
				}		
			});
		return found;
	} else {
		console.log('Invalid search input');
	}


}

NoteApplication.prototype.delete = function (note_id) {
	if( typeof note_id === 'number' && note_id > 0 ) {
			for(var item = 0; item < this.allNotes.length; item++) {
				if(this.allNotes[item].id === note_id){
					this.allNotes.splice( item, 1 );
					return 'note deleted successfully!';
				} else {
					console.log('No such note content available');
				}
			}
		} else {
			console.log('invalid input. Must be an integer');
		}
}

NoteApplication.prototype.edit = function (note_id, new_content) {
	if(typeof note_id === 'number' && note_id > 0 && typeof new_content === 'string') {
			this.allNotes.forEach(function (item) {
				if (item.id === note_id) {
					item.content = new_content;
					console.log('content edited successfully!');
				} else {
					console.log('Invalid note ID');
				}
			})
		} else {
			console.log('invalid input format. Id Must be an integer and content must be string!');
			return false;
		}
}

module.exports = NoteApplication;

