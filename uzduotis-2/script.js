window.onload = function(){
    const masyvas = [3, 18, 4, 9];

    console.log(sandauga(masyvas));

}

function sandauga (masyvas){
    let sandaugele = 1;
    for (let i = 0; i < masyvas.length; i++){
       
        sandaugele *= masyvas[i];
        
    }
    return sandaugele; //return TURI BUTI PO FUNKCIJOS
 // IŠSPRĘSTA
}