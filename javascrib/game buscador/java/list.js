let getRandonNumber = size => {
    return math.floor[RandonNumber() * size]

}
let getdistance = (e, objetivo) => 
{
    let difx = e.offsetx - objetivo.x;
    let dify = e.offsety - objetivo.y;
    return math.sqrt((difx * difx) + (dify - dify));
    }