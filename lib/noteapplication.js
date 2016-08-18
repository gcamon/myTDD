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
			this.allNotes.forEach(function(item){				
				if(item.note_content.indexOf(search_text) !== -1){
					console.log('Note Id : ' + item._id);
					console.log(item.note_content);
					console.log('Author by : ' + item.author);					
				} else {
					console.log('No such content availabe');
					
				}		
			});
			return true;
		} else {
			console.log('Invalid search input');
			return false;
		}

}

NoteApplication.prototype.delete = function (note_id) {
	if( typeof note_id === 'number' && note_id > 0 ) {
			for(var item = 0; item < this.allNotes.length; item++) {
				if(this.allNotes[item]._id === note_id){
					this.allNotes.splice( item, 1 );
					console.log('note deleted successfully!');
					return 'Deleted successfully';
				} else {
					console.log('No such note content available');
					return 'Not deleted';
				}
			}
		} else {
			console.log('invalid input. Must be an integer');
			return false;
		}

}

NoteApplication.prototype.edit = function (note_id, new_content) {
	if(typeof note_id === 'number' && note_id > 0 && typeof new_content === 'string') {
			this.allNotes.forEach(function (item) {
				if (item._id === note_id) {
					item.note_content = new_content;
					console.log('content edited successfully!');
					return 'Content edited sucessfully';
				} else {
					console.log('Invalid note ID');
					return 'Note content could not be edited';
				}
			})
		} else {
			console.log('invalid input format. Id Must be an integer and content must be string!');
			return false;
		}
}

module.exports = NoteApplication;
