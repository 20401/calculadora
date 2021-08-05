const WIDTH = 500;
const HEIGH = 500;


let objetivo = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
}


let $lab = document.getElementById("lab");
let clicks = 0;

//e este ubico la fncion clicks y utilizo la funcion de pitagoras en listner


$lab.addEventListener("click", function (e) {
    let distance = getDistance(e, objetivo);
    let distanceHint = getDistanceHint(distance);
    clicks++;

    //se escribe el valor de la variable obtenida en el html

    let $distance = document.getElementById("distance");
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;

    //se crea la condicion para la victoria y el reinicio del programa
    if (distance < 20){
        alert (`felicitaciones has encontrado a pepo y lo lograste en ${clicks} clicks :)`
        );
    location.reload ();
    }

    //$ distance.innerHTML = distance;

    // console.log(distanceHint);

    // en esta secion se ubica el texto en html

});



/*

element.addEventListener("click", function(e){ alert("Hello World!"); });
*/