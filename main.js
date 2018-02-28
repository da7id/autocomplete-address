var input = document.getElementById( 'address' );
var options = {

};

var components = {
	address: 'short_name',
	address2: 'long_name',
	county: 'long_name',
	postal_code: 'short_name',
};

autocomplete = new google.maps.places.Autocomplete( input, options );

autocomplete.addListener( 'place_changed', fillInAddress );

function fillInAddress() {
	var place = autocomplete.getPlace();
	
	var zip = place.address_components[7].short_name;
	var address1 = place.address_components[0].short_name + " " + place.address_components[1].short_name;
	var country = place.address_components[6].long_name;
	var state = place.address_components[5].long_name;

	document.getElementById( 'address' ).value = address1;
	document.getElementById( 'country' ).value = country;
	document.getElementById( 'state' ).value = state;
	document.getElementById( 'zip' ).value = zip;
}
