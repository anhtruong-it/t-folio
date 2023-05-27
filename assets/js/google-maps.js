function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -27.96267176505825, lng: 153.38137898015285};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Griffith University' // Title Location
    });
}