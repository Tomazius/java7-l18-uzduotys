window.onload = function (){

    const masyvas = [5, 12, 3, 6, 8, 14, 15, 5, 6, 10];

    let ieskomasskaicius = 15;
    let ieskomasskaicius2 = 8 ;

    console.log(paieska(masyvas, ieskomasskaicius, ieskomasskaicius2));
    

}

function paieska (masyvas, ieskomasskaicius, ieskomasskaicius2){
    let arPirmasyra = false;
    let arAntrasyra = false;
    for (let i = 0; i < masyvas.length; i++){
        if (masyvas[i] === ieskomasskaicius){
            arPirmasyra = true;
            console.log("Pirmas yra");
            
        }
        if (masyvas[i] === ieskomasskaicius2){
            arAntrasyra = true;
            console.log("Antras yra");
        }
    }
    if (arPirmasyra === true && arAntrasyra === true){
        return "bingo";
    }
    return false;
}

// Panašu, kad pabaigta

// Užduotis:

// Susikurti papildomą funkciją, kuri gauna masyvas per parametrus bei ieškomasSkaičius per parametrus ir suranda ar masyve egzistuoja tas ieškomasSkaičius. 
// Pvz., jeigu yra masyvas {5, 12, 3, 6, 8, 14, 15, 5, 6, 10}, o ieškomasSkaičius yra 12 tai funkcija turėtų grąžinti true. 
// Jeigu su tuo pačiu masyvu ieškomasSkaičius yra 122 tai funkcija turėtų grąžinti false, nes tokio skaičiaus nėra.


//  Patobulinkite tą funkciją, arba DAR GERIAU: panaudokite ją taip (pagr. funkcijoj arba naujoj funkcijoj), jog patikrintų ar masyve yra du skaičiai. 
//  T.y., jeigu masyvas yra {5, 12, 3, 6, 8, 14, 15, 5, 6, 10} ir sk1 yra 12, o sk2 yra 22 tai funkcija grąžintų false, nes 22 nėra (nors ir 12 buvo). 
//  Su tuo pačiu masyvu jeigu funkcija gautų sk1 3, o sk2 6 tai tada funkcija grąžintų true, nes ir 3 ir 6 joje yra