window.onload = function(){
    
    const masyvas = [5, 12, 3, 6, 8, 14, 15, 5, 6, 10, 25, 40, 88];

    let x = 122;

    console.log(virs10(masyvas, x));

}

function ardaugiaunei10 (jep, x){
    
    return jep > x;
}

function virs10 (masyvas, x){
    let kiekis = 0;
    for (let i = 0; i < masyvas.length; i++){
        if (ardaugiaunei10(masyvas[i], x)){
            kiekis++;
        }
    
    }
    return kiekis;
}