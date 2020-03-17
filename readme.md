# Firebase challenges

To get started with this repository please make sure you create a apiKeys.js and add your firebaseConfig to it.

```
var firebaseConfig = {
	apiKey: 'xxxxxxxxxxxxxxxxx',
	authDomain: 'xxxxxxxxxxxxxxxxxxxx',
	databaseURL: 'xxxxxxxxxxxx',
	projectId: 'xxxxxxxxxxxxxxx',
	storageBucket: 'xxxxxxxxxxxxxxxxxxxx',
	messagingSenderId: 'xxxxxxxxxxxx',
	appId: 'xxxxxxxxxxxxxxx'
};

var googleKey = 'XXXXXXXXXXXXXXXXXXX'


```

## Google Maps Javascript API

This challenge will have you implement a custom Google Maps component. Your task is to use Google Maps' Javascript API to display a map of the Southeast United States with pins on the map for the capitol cities of each state. There should be a toggle button that hides/shows these pins on the map.

Documentation: https://developers.google.com/maps/documentation/javascript/tutorial

## Authorization and Authentication with Firebase

For this challenge, you'll learn how to implement a login and account creation system for your website using Firebase. Firebase has some very handy utilites for this kind of feature - They'll manage users and their credentials, and they even have a handy login UI that you can copy-paste into your HTML/JS. Your task is to implement 1) a "Home" page (don't worry about it's design) that people can view whether or not they're logged in, 2) A login/signup page that uses Firebase's login UI, and 3) a "dashboard" page that only logged in users can see (it should kicked unauthorized users back to the login page)

Documentation: https://firebase.google.com/docs/auth/web/start

## Comments challenge

For this challenge, you'll be coding a "comments" section (Think of comments on youtube or blog posts). The HTML for your site should be very simple - just a textbox at the top of the page and a container for peoples' comments. The challenge is to use Firebase to save peoples' comments to the cloud (as opposed to saving them to localStorage). If done correctly, everyone should have the ability to visit the website and see the same set of comments, as well as the ablility to add their own comments for the world to see!

Documentation: https://firebase.google.com/docs/database/web/start
