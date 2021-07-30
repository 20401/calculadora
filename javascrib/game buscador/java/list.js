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
    if (distance < 20) {
        return "HAS ENCONTRADO A PEPO"
        
    }
    else if (distance < 40) {
        return "MUY CALIENTE";
    }
    else if (distance < 80) {
        return "CALIENTE";
    }
    else if (distance < 120) {
        return "TIBIO";
    }
    else if (distance < 150) {
        return "FRIO";
    }
    else if (distance < 200) {
        return "MUY FRIO";
    }
    else if (distance < 360) {
        return "HIELO ";
    }

    else {
        return "CONGELADO";
    }
}