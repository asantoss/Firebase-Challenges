// The script from google is looking for this initMap function. The script will run it once everything from google is loaded.

var cities = [
	{
		capital: 'Atlanta',
		state: 'GA',
		lat: 33.749,
		lng: -84.38633
	},
	{
		capital: 'Charlotte',
		state: 'NC',
		lat: 35.14,
		lng: -80.843124
	},
	{
		capital: 'Columbia',
		state: 'SC',
		lat: 34.0007104,
		lng: -81.0348144
	},
	{
		capital: 'Montgomery',
		state: 'AL',
		lat: 32.3792,
		lng: -86.3077
	},
	{
		capital: 'Nashville',
		state: 'TN',
		lat: 36.1,
		lng: -86.47
	},
	{
		capital: 'Tallahassee',
		state: 'FL',
		lat: 30.4383,
		lng: -84.2807
	}
];
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 33.836082, lng: -81.163727 },
		zoom: 5
	});
	// We run through our array of objects and create a new array of markers with the title of the city and the position.
	var markers = cities.map(city => {
		var marker = new google.maps.Marker({
			position: { lat: city.lat, lng: city.lng },
			title: city.capital
		});
		return marker;
	});

	// Lets create a boolean variable to track if the markers are shown.
	var markerState = false;
	// Get the button on our DOM
	var markerToggle = document.getElementById('markerToggle');
	markerToggle.addEventListener('click', function() {
		//Use the click evnt to loop through our array of markers and setMap on each marker.
		// Also use the this keyword to change the inner text of the element that was clicked.
		markers.forEach(marker => {
			//This line says if markerState is false meaning they are not displayed then use the set map function to show our markers.
			if (!markerState) {
				marker.setMap(map);
				this.innerHTML = 'Hide Markers';
			} else {
				marker.setMap(null);
				this.innerHTML = 'Show Markers';
			}
		});

		//Here we set the variable markerState to be opposite of what it currently is.
		markerState = !markerState;
	});
}
