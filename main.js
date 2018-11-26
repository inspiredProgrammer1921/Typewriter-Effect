// const TypeWriter = function(txtElement, words, wait = 3000) {
// 	this.txtElement = txtElement;
// 	this.words = words;
// 	this.txt = '';
// 	this.wordIndex = 0;
// 	this.wait = pardeInt(wait, 10);
// 	this.type();
// 	this.isDeleting = false;
// };

// // Type Method
// TypeWriter.prototype.type = function() {
// 	// Current Index of Word
// 	const current = this.wordIndex % this.words.length;
// 	// Get Full Text of Current Word
// 	const fullTxt = this.words[current];

// 	// Check if deleting
// 	if (this.isDeleting) {
// 		// Remove Char
// 		this.txt = fullTxt.substring(0, this.txt.length - 1);
// 	} else {
// 		// Add Char
// 		this.txt = fullTxt.substring(0, this.txt.length + 1);
// 	}

// 	// Insert txt into element
// 	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

// 	// Initial Type Speed
// 	let typeSpeed = 300;

// 	if (this.isDeleting) {
// 		typeSpeed /= 2;
// 	}

// 	// If Word is Complete
// 	if (!this.isDeleting && this.txt === fullTxt) {
// 		// Make Pause at End
// 		typeSpeed = this.wait;
// 		// Set Delete to True
// 		this.deleting = true;
// 	} else if (this.isDeleting && this.txt === '') {
// 		this.isDeleting = false;
// 		// Move to Next Word
// 		this.wordIndex++;
// 		// Pause Before Starts Typing
// 		typeSpeed = 500;
// 	}

// 	setTimeout(() => this.type(), typeSpeed);
// };

// ES6 Class
class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}

	type() {
		// Current Index of Word
		const current = this.wordIndex % this.words.length;
		// Get Full Text of Current Word
		const fullTxt = this.words[current];

		// Check if deleting
		if (this.isDeleting) {
			// Remove Char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add Char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		// Insert txt into element
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

		// Initial Type Speed
		let typeSpeed = 300;

		if (this.isDeleting) {
			typeSpeed /= 2;
		}

		// If Word is Complete
		if (!this.isDeleting && this.txt === fullTxt) {
			// Make Pause at End
			typeSpeed = this.wait;
			// Set Delete to True
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			// Move to Next Word
			this.wordIndex++;
			// Pause Before Starts Typing
			typeSpeed = 500;
		}

		setTimeout(() => this.type(), typeSpeed);
	}
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);
// Init App
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init Typewriter
	new TypeWriter(txtElement, words, wait);
}
