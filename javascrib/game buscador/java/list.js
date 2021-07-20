//generador de ubicaciones
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}


//selection de los 2 puntos el tesoro y el buscador//
let getDistance = (e, objetivo) => {
    let diffX = e.offsetX - objetivo.x;
    let diffY = e.offsetY - objetivo.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));

}
let getDistanceHint = distance => {
    if (distance < 30) {
        return "Se Quemo";
    }
    else if (distance < 50) {
        return "Muy Caliente";
    }
    else if (distance < 80) {
        return "Caliente";
    }
    else if (distance < 100) {
        return "Tibio";
    }
    else if (distance < 130) {
        return "frio";
    }
    else if (distance < 180) {
        return "Muy frio";
    }
    else if (distance < 360) {
        return "HIELO ";
    }

    else {
        return "CONGELADO";
    }
}