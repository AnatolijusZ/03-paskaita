"use strict"
console.log("Pavyko");

var skaicius = 16;
var skaicius1 = 17;

//15 > 16
//false
//salygos veiksmu nevykdo

//18 > 16
//true
//salygos veiksmus vykdo

//16>16
//false
//salygos veiksu nevykdo
//if(skaicius > skaicius1) {
//    console.log("Tiesa, skaicius daugiau negu skaicius1");
//}



//16<16
//false
//salygos veiksmu nevykdo

//15<16
//true
//salygos veiksmus vykdo
//if(skaicius < skaicius1) {
//    console.log("Tiesa, skaicius maziau negu skaicius1");
//}


//16=16
//true
//salygos veiksmus vykdo
//if(skaicius == skaicius1) {
//    console.log("Tiesa, skaicius lygus skaicius1");
//}


//if(skaicius >= skaicius1) {
//    console.log("Tiesa, skaicius daugiau arba lygu skaicius1");
//}


// ar skaicius nelygus skaicius1?
//if(skaicius != skaicius1) {
//    console.log("Tiesa, skaicius nelygus skaicius1");
//}

// 16 = 17
//false
//veiksmu nevykdo
//vykdo else veiksmus
if(skaicius == skaicius1) {
    console.log("Tiesa, skaicius lygus skaicius1");
} else {
    console.log("Skaicius nelygus skaicius1");
}


// Patikrinti ar naturalus skaicius yra lyginis ar nelyginis
// [1, 2, 3, 4, ...]

//apsirasyti kintamaji tSkaicius 12
//pasitikrinti tSkaicius > 0; netikrinsim ar skaicius yra realus
//tikrinsim skaicius lyginis ar ne

var tSkaicius = 12;
if(tSkaicius > 0) {
    if (tSkaicius % 2 ==0) {
        console.log("Skaicius yra lyginis" + tSkaicius);
    } else {
        console.lot("skaicius yra nelyginis" + tSkaicius);
    }
}else {
    console.log("Skaicius ne naturalus" + tSkaicius);
}


tSkaicius = 15;

//isvesti informacia tada kai musu skaicius yra 12, 13 arba 14

if (tSkaicius == 12) {
    console.log("Skaicius lygus 12");
} else if(tSkaicius == 13) {
     console.log("Skaicius lygus 13");
} else if(tSkaicius == 14) {
    console.log("Skaicius lygus 14");
} else {
    console.log("Skaicius nelygus nei 12, nei 13, nei 14");
}


//Jeigu skaius1 lyginis, sudauginti skaiciu a ir b, jeigu skaicius1 yra nelyginis, pakeisti skaicius1 reiksme i 14


skaicius1 = 150;
let a, b;
let sandauga;
//var sandauga;

//"var" yra globalus kintamasis, veikia visam kode, "let" yra localus, veike tik savo bloke (skliauseliose {} )

a = 5;
b = 4;

if(skaicius1 % 2 == 0){
    //let sandauga;
    sandauga = a * b;
    //console.log("Sandauga: " + sandauga);
} else {
    skaicius1 = 14;
}
console.log("Sandauga: " + sandauga);
console.log("Skaicius1: " + skaicius1);

// "const" pastovus kintamasis, negalima priskirti kitos reiksmes
const pi = 3.141;
//pi = 5;  duos klaida
console.log(pi);