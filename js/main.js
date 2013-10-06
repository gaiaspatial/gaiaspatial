function changeLandscapeLayer(newLayer) {
  var newSrc = "img/layer-" + newLayer + ".png";
  $('#layerImage').attr("src", newSrc);
  var btnGroup = $("#layerButtons").children();
  $.each(btnGroup, function(i, button){
    if($(button).hasClass(newLayer)){
      $(button).addClass("active");
    } else {
      if($(button).hasClass("active")){
        $(button).removeClass("active");
      }
    }
  });
  var txtGroup = $("#layerTexts").children();
  $.each(txtGroup, function(i, item){
    if($(item).hasClass(newLayer)){
      $(item).show();
    } else {
      $(item).hide();
    }
  });
}


// function toggleContentOption(target){
//     $('.content-option').hide();
//     $(target).show();
// }

// $(document).ready(function() {
// 	$('#myCarousel').carousel({
// 		interval: 8000,
// 		pause: "false"
// 	});
// });

// var lat = -180
// var projection = d3.geo.orthographic()
//     .rotate([lat,0])
//     .clipAngle(90);
// var path = d3.geo.path()
//     .projection(projection);
// var rscale = d3.scale.sqrt();
// var graticule = d3.geo.graticule();
// var world;

// var svg = d3.select(".rotatingGlobe").append("svg")
//     .attr("width", 1)
//     .attr("height", 1);

// function getGlobeData(){
//   $.ajax({
//       type: 'GET',
//       url: 'data/world.json',
//       contentType: 'application/json',
//       dataType: 'json',
//       timeout: 10000,
//       success: function(json) {
//         world = json;        
//         initSizes();
//       },
//       error: function(e) {
//           console.log(e);
//       }
//   });
// }

// function initSizes() {
//   height = $(".logo").height() + 40;
//   width = height;

//   projection.translate([width/2,height/2]);
//   svg
//     .attr("width", width)
//     .attr("height", height);
//   // rscale.range([0, height]);
//   fitMapProjection();
// };



// var fitMapProjection = function() {
//   fitProjection(projection, world, [[0, 0], [width-10, height-10]], true);
//   drawGlobe();
// };



// function drawGlobe(){ 
//     fitMapProjection();
//     svg.selectAll("path")
//         .data(world.features)
//         .enter().append("path")
//         .attr("d", path)
//         .attr("class", function(d){return d.properties.featurecla;}); 
//   setInterval(function(){
//   lat = lat +.5
//    projection.rotate([lat,0]);
//     svg.selectAll("path")
//         .attr("d", path);
//   },window.anispeed);      
// }



// getGlobeData();

// d3.select(window).on('resize', function resize() {
//     initSizes();    
// });