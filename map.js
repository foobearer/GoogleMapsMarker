function initMap() {
  var worldMapData = [
    {
      "Id": "10020",
      "PropertyCode": "HELHAK",
      "address": "Siltasaarenkatu 14",
      "latitude": "60.1791466",
      "longitude": "24.9473743",
      "GMapIconImage": "/assets/markers/marker.png",
      "type": "Hotel",
      "hotelName": "Cumulus Hakaniemi Helsinki"
    },
    {
      "Id": "10080",
      "PropertyCode": "HELKAI",
      "address": "Kaisaniemenkatu 7",
      "latitude": "60.1716867",
      "longitude": "24.9458183",
      "GMapIconImage": "/assets/markers/marker.png",
      "type": "Hotel",
      "hotelName": "Cumulus Kaisaniemi Helsinki"
    },
    {
      "Id": "10170",
      "PropertyCode": "HELMEI",
      "address": "Tukholmankatu 2",
      "latitude": "60.1910171",
      "longitude": "24.9090258",
      "GMapIconImage": "/assets/markers/marker.png",
      "type": "Hotel",
      "hotelName": "Cumulus Meilahti Helsinki"
    },
    {
      "Id": "10090",
      "PropertyCode": "HELOLY",
      "address": "Läntinen Brahenkatu 2",
      "latitude": "60.1868253",
      "longitude": "24.946055",
      "GMapIconImage": "/assets/markers/marker.png",
      "type": "Hotel",
      "hotelName": "Cumulus Kallio Helsinki"
    },
    {
      "Id": "10280",
      "PropertyCode": "HELSEU",
      "address": "Kaivokatu 12",
      "latitude": "60.1700957",
      "longitude": "24.9377173",
      "GMapIconImage": "/assets/markers/marker.png",
      "type": "Hotel",
      "hotelName": "Hotel Seurahuone Helsinki"
    }
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(60.1791466, 24.9473743),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < worldMapData.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(worldMapData[i].latitude, worldMapData[i].longitude),
      map: map
    });
  }

}

    