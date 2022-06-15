window.onload = function(){

    const matrica = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];

    console.log(matricosilgis(matrica));
    console.log(matricossuma(matrica));
    console.log("--------");

    let vidurkis = matricossuma(matrica)/matrica.length;
    console.log(vidurkis);
}

function matricosilgis (ilgis){
    return ilgis.length;
///vidurkiui padaryti funkciją

}
function matricossuma (vidurkis){
    let suma = 0;
    for (let i=0; i < vidurkis.length; i++){
        suma += vidurkis[i];
    }
    return suma;
}