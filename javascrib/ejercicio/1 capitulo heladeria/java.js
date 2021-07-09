dinerocofla = prompt("cuanto dinero tienes cofla");
dineropedro = prompt("cuanto dinero tienes pedro");
dineroroerto = prompt("cuanto dinero tienes roerto");
dinerocofla = parseInt (dinerocofla);

if (dinerocofla >= 1 && dinerocofla < 1.6) {
    alert("cofla, comprate el helado de agua")
    alert("y te sobran " + ( dinerocofla - 1.8));
}
else if (dinerocofla >= 1.6 && dinerocofla < 1.8){
    alert("cofla, comprate el helado de crema");
alert("y te sobran " + ( dinerocofla - 1.8));
}
else if (dinerocofla >= 1.8 && dinerocofla <2.9)
{
    alert("cofla, comprate el helado de helatriz");
    alert("y te sobran " + ( dinerocofla - 1.8));
}
else if (dinerocofla >= 1.8 && dinerocofla < 2.9)
{
    alert("cofla, comprate el helado de elardo");
    alert("y te sobran " + ( dinerocofla - 1.8));
}
else if (dinerocofla >= 2.9) {
    alert("cofla, comprate el helado de confeti o el pote de 1/4 kg");
    alert("y te sobran " + ( dinerocofla - 2.9));
}
else {
    alert("cofla, papi siga derecho que esta heladria la hizo dracula ");

}


if (dineropedro >= 1 && dineropedro < 1.6) {
    alert("pedro, comprate el helado de agua")
}
else if (dineropedro >= 1.6 && dineropedro < 1.8)
{
    alert("pedro, comprate el helado de crema");
}
else if (dineropedro >= 1.8 && dineropedro <2.9)
{
    alert("pedro, comprate el helado de helatriz")
}
else if (dineropedro >= 1.8 && dineropedro < 2.9)
{
    alert("pedro, comprate el helado de elardo")
}
else if (dineropedro >= 2.9) {
    alert("pedro, comprate el helado de confeti o el pote de 1/4 kg")
}
else {
    alert("pedro, papi siga derecho que esta heladria la hizo dracula ");
}


if (dineroroerto >= 1 && dineroroerto < 1.6) {
    alert("roberto, comprate el helado de agua")
}
else if (dineroroerto >= 1.6 && dineroroerto < 1.8)
{
    alert("roberto, comprate el helado de crema");
}
else if (dineroroerto >= 1.8 && dineroroerto <2.9)
{
    alert("roberto, comprate el helado de helatriz")
}
else if (dineroroerto >= 1.8 && dineroroerto < 2.9)
{
    alert("roberto, comprate el helado de elardo")
}
else if (dineroroerto >= 2.9) {
    alert("roberto, comprate el helado de confeti o el pote de 1/4 kg")
}
else {
    alert("roberto, papi siga derecho que esta heladria la hizo dracula ");
}