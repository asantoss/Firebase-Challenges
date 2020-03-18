// For this challenge we will authenticate users using the FirebaseUI
// Provided to us by firebase

//First and foremost we will need to makesure the providers are enabled inside of our project
// Source: https://firebase.google.com/docs/auth/web/firebaseui

// We start by initializing our app and ui
var app = firebase.initializeApp(firebaseConfig);

var ui = new firebaseui.auth.AuthUI(app.auth());

//We use the start method of our UI class which takes and ID for our container
// && an object for our options.

//Source: https://firebase.google.com/docs/auth/web/firebaseui#sign_in
ui.start('#firebaseui-auth-container', {
	//The callbacks key is an object containing all of the callbacks the ui uses
	callbacks: {
		signInSuccessWithAuthResult: function(authResult, redirectUrl) {
			// User successfully signed in.
			// Return type determines whether we continue the redirect automatically
			// or whether we leave that to developer to handle.
			return true;
		},
		uiShown: function() {
			// The widget is rendered.
			// Hide the loader.
			document.getElementById('loader').style.display = 'none';
		}
	},
	signInFlow: 'popup',
	signInSuccessUrl: 'dashboard.html',
	signInOptions: [
		// List of OAuth providers supported.
		firebase.auth.GoogleAuthProvider.PROVIDER_ID
	],
	// Terms of service url.
	tosUrl: '<your-tos-url>',
	// Privacy policy url.
	privacyPolicyUrl: '<your-privacy-policy-url>'
});

//This code is pertaining to our dashboard HTML page
// The reccomended way to get the current user is by setting an observer on the Auth object
// Source: https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
app.auth().onAuthStateChanged(function(user) {
	if (user) {
		// User is signed in.
		console.log(user);
		// Once this fires it means we have successfully found a user and we should be on our dashboard page now.

		//We will traget the container inside of our dashboard using this line.
		var dashboardContainer = document.getElementById('dashboard');
		if (dashboardContainer !== null) {
			// If we made it here we are both on the correct HTML paged and we found the container that is inside of our dashboard.html
			var userHTML = `
            <h1>Welcome to the dashboard, ${user.displayName}</h1>
            <p> Your email is ${user.email}</p>
            <div id='userImage'><img src="${user.photoURL}"></div>
            `;
			dashboardContainer.innerHTML = userHTML;
		}
	} else {
		// No user is signed in.
	}
});
