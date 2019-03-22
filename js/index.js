var string = "hello";
var number = 5;
var boolean = true;
var word = $(".word");
var circle = $(".circle");

console.log (circle);
console.log (word);



$(document).on('mousemove' , function(event) {
 var pageX = event.pageX;
 var pageY = event.pageY;
 //console.log(pageX + ":" + pageY);

 circle.css({
 //"opacity": (pageX/window.innerWidth),
 "left": pageX-150 +"px",
 "top": pageY-150 +"px"
  })
   word.css({
   //"opacity": (pageX/window.innerWidth),
 "right": pageX+"px",
 "bottom": pageY +"px"
 });

});