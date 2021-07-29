//generador de ubicaciones
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}
let distance

//selection de los 2 puntos el tesoro y el buscador//
let getDistance = (e, objetivo) => {
    let diffX = e.offsetX - objetivo.x;
    let diffY = e.offsetY - objetivo.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));

}
let getDistanceHint = distance => {
    if (distance < 20) {
        return "HAS encontrado a pepo"
        
    }
    else if (distance < 40) {
        return "Muy Caliente";
    }
    else if (distance < 80) {
        return "Caliente";
    }
    else if (distance < 120) {
        return "Tibio";
    }
    else if (distance < 150) {
        return "frio";
    }
    else if (distance < 200) {
        return "Muy frio";
    }
    else if (distance < 360) {
        return "HIELO ";
    }

    else {
        return "CONGELADO";
    }
}