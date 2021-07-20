let getRandonNumber = size => {
    return math.floor[RandonNumber() * size]

}
let getdistance = (e, objetivo) => {
    let difx = e.offsetx - objetivo.x;
    let dify = e.offsety - objetivo.y;
    return math.sqrt((difx * difx) + (dify + dify));

}
let getdistance = distance => {
    if (distance < 30) {
        return "Se Quemo"
    }
    else if (distance < 50) {
        return "Muy Caliente"
    }
    else if (distance < 80) {
        return "Caliente"
    }
    else if (distance < 100) {
        return "Tibio"
    }
    else if (distance < 130) {
        return "frio"
    }
    else if (distance < 180) {
        return "Muy frio"
    }
    else if (distance < 360) {
        return "HIELO "
    }
    
    else {
    return "CONGELADO"
}