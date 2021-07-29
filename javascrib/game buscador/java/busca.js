const WIDTH = 500;
const HEIGH = 500;


let objetivo = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
}


let $lab = document.getElementById("lab");
let $distance = document.getElementById("distance");
//let $distance = document.getDistancehint(distance); 

$lab.addEventListener("click", function (e) {
    let distance = getDistance(e, objetivo);
    let distanceHint = getDistanceHint(distance);});
    $distance.innerHTML = <h1>${distanceHint}</h1>;

    //distance.innerHTML = distanceHint;

    //$ distance.innerHTML = distanceHint;

    // console.log(distanceHint);

    // en esta secion se ubica el texto en html





/*

element.addEventListener("click", function(e){ alert("Hello World!"); });
*/