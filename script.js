var app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

var commentForm = document.getElementById('commentForm');

commentForm.addEventListener('submit', function(event) {
	event.preventDefault();
	console.log(event);
	var comment = event.target.elements.comment.value;
	return db
		.collection('comments')
		.add({
			body: comment
		})
		.then(function(doc) {
			// *** We receive the refrence to the document as the parameter of our callback that runs after the promise is resolved.
			var commentData = doc.data();
			var commentHTML = `
            <div class="comment">
                ${commentData.body}
            </div>

        `;
		});
});
