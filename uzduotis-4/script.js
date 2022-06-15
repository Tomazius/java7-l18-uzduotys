window.onload = function(){
    let x = 200;
    let y = 220;
    
    const nelyginiai = masyveNelyginiai(x, y);
    console.log (nelyginiai);

   
}

function arnelyginis(nelyg){
    return nelyg % 2 === 1;        
        
}

function masyveNelyginiai(x, y){
    const masyvas = [];

    for (let i = x; i <= y; i++){
        if (arnelyginis(i)) {
            masyvas.push(i);
        }
    }
    return masyvas;
}
