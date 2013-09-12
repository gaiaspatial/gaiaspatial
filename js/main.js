function toggleContentOption(target){
    $('.content-option').hide();
    $(target).show();
}


$(document).ready(function() {
	$('#myCarousel').carousel({
		interval: 8000,
		pause: "false"
	});
});


var width = 480,
    height = 480;

var lat = -180
var projection = d3.geo.orthographic()
    .scale(180)
    .translate([width/2,height/2])
    .rotate([lat,0])
    .clipAngle(90);
var path = d3.geo.path()
    .projection(projection);

var graticule = d3.geo.graticule();

var svg = d3.select(".rotatingGlobe").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("data/world.json", function(collection){
	svg.selectAll("path")
		.data(collection.features)
		.enter().append("path")
        .attr("d", path)
        .attr("class", function(d){return d.properties.featurecla;}); 
});


setInterval(function(){
lat = lat +.5
 projection.rotate([lat,0]);
  svg.selectAll("path")
      .attr("d", path);
},window.anispeed);