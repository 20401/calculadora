const WIDTH = 500;
const HEIGH = 500;


let objetivo = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
}


let $lab = document.getElementById("lab");
//let $distance = document.getDistancehint(distance); 

$lab .addEventListener ("click", function(e) {
     let distance = getDistance (e, objetivo)
     let distanceHint = getDistanceHint(distance)
//console.log(distanceHint)
<h1>$distanceHint</h1>
});


/*

element.addEventListener("click", function(e){ alert("Hello World!"); });
*/