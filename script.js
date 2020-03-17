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
