window.onload = function(){

    const masyvas = [5, 12, 3, 6, 8, 14, 15, 5, 6, 10];

    let intervaloPradzia = 10;
    let intervaloPabaiga = 18;


    console.log(papildoms(masyvas, intervaloPradzia, intervaloPabaiga));
}

function vienasskaicius (skaicius, intervaloPradzia, intervaloPabaiga){
    if (intervaloPradzia < skaicius && skaicius <= intervaloPabaiga){
        return true;
        
    }
    else {
        return false;
    }
}

function papildoms (masyvas, intervaloPradzia, intervaloPabaiga){
    let kiekis = 0;
    for (let i = 0; i < masyvas.length; i++) {
        
        if (vienasskaicius(masyvas[i], intervaloPradzia, intervaloPabaiga)){
            kiekis += 1;
        }
        
    }
    return kiekis;
     
}





// Užduotis:

// 1. Susikurti projektą, failus.  Nupushinti į github
// 2. Susikurkite kokį "testinį" masyvą
// 3. Susikurti papildomą funkciją, kuri gauna masyvas per parametrus bei intervaloPradžia ir intervaloPabaiga per parametrus ir suranda kiek masyve yra skaičių, kurie priklauso duotam intervalui. (imtinai) 
//    T.y., jeigu turime masyvą {5, 12, 3, 6, 8, 14, 15, 5, 6, 10}, o intervaloPradzia=10; intervaloPabaiga=14, tai reikėtų grąžinti KIEK skaičių priklauso intervalui nuo 10 iki 14. 
//    Šiuo atveju, masyve yra 12 14  kurie priklauso tam intervalui, tai atsakymas turėtų būti 2.
// 4. Ištestuokite funkciją ir nupushinti į github
// 5. Kaip galėtumėte panaudoti šitą funkciją, jog ji rastų kiek masyve yra teigiamų skaičių? 