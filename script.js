var app = firebase.initializeApp(firebaseConfig);
//We assign the instance of our firebase firestore database to the variable db.
var db = firebase.firestore();

var commentForm = document.getElementById('commentForm');

commentForm.addEventListener('submit', function(event) {
	event.preventDefault();
	console.log(event);
	var comment = event.target.elements.comment.value;
	//Inside of our firebase firestore account we created a collection named comments.
	//We will use this collection to add documents for everytime this event is fired off.
	// The add() method takes an object as a parameter for the fields your document will contain.
	//Source: https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document
	return db
		.collection('comments')
		.add({
			body: comment
		})
		.then(function(doc) {
			// *** We receive the refrence to the document as the parameter of our callback that runs after the promise is resolved.
			// When this function is ran it means our document was succesfully added to our databse
			console.log(`Your document was created! Here is the ID: ${doc.id}`);
		});
});

/* *** We are creating a function that will read all of the documents inside our database and create some HTML, for each comment.

*/
function loadComments() {
	// First and foremost we will call the get() method on our comments collection.
	// This will return a promise of whcih the parameter passed to our then callback is an array of documents.
	// Source: https://firebase.google.com/docs/firestore/query-data/get-data#get_all_documents_in_a_collection
	db.collection('comments')
		.get()
		.then(function(docs) {
			// We are creating an empty array that we will push all of the comments we are rendering.
			var commentsHTML = [];
			docs.forEach(function(doc) {
				var commentData = doc.data();
				var commentHTML = `<div class="comment">${commentData.body}</div>`;
				// In this line we are pushing individual comments to the array we created up top.
				commentsHTML.push(commentHTML);
			});
			//We will return the array we created which is an array of divs for each comment.
			//Since we are returning inside of this .then callback, JavaScript will pass it as the parameter of our next .then callback.
			return commentsHTML;
		})
		.then(function(commentsHTML) {
			var commentsContainer = document.getElementById('commentsContainer');
			// Remeber to use a join('') method on your array to get rid of the commas.
			commentsContainer.innerHTML = commentsHTML.join('');
		});
}

//We invoke our loadComments function to get all the comments when we first load the page.
loadComments();
