
// $(document).ready(function() {
 
//   $('.map').gmap3({
//     center:[22.9423227,90.800628,13],
//     zoom: 10,
//     mapTypeId : google.maps.MapTypeId.ROADMAP
//   });
 
// });


// $(document).ready(function() {

// $('.map')
//       .gmap3({
//         center:[48.8620722, 2.352047],
//         zoom:4
//       })
//       .marker([
//         {position:[48.8620722, 2.352047]},
//         {address:"86000 Poitiers, France"},
//         {address:"66000 Perpignan, France", icon: "https://maps.google.com/mapfiles/marker_grey.png"}
//       ])
//       .on('click', function (marker) {
//         marker.setIcon('https://maps.google.com/mapfiles/marker_green.png');
//       });

//     });


// $(document).ready(function() {

// var uluru = {lat: -25.363, lng: 131.044};
// $('.map')
//   .gmap3({
//     zoom: 4,
//     center: uluru
//   })
//   // .marker({
//   //   position: uluru
//   // })
//   .infowindow({
//     position: uluru,
//     content: "Hello from Uluru"
//   })
//   .then(function (infowindow) {
//    infowindow.open (this.get(0));
//   });

// });


$(document).ready(function() {

$('.map')
.gmap3({
  center:[41.850033, -87.650052],
  zoom:12,
  mapTypeId: "shadeOfGrey", // to select it directly
  mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
  }
})
.styledmaptype(
  "shadeOfGrey",
  [
    {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#ff0000"},{"lightness":40}]},
    {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
    {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
    {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
    {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
    {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
    {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
    {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
    {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
    {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
    {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
    {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
    {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
  ],
  {name: "Shades of Grey"}
);

});