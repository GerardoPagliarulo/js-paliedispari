/**
 * PALINDROMA
 * 
 * Chiedere all’utente di inserire una parola.
 * Creare una funzione per capire se la parola inserita è palindroma.
*/

var parolaUtente

// Chiedere all'utente di inserire una parola
parolaUtente = prompt('Inserire una parola:').toLowerCase();
// parolaUtente = parolaUtente.toLowerCase();

// Invocazione
var palindroma = parolaPalindroma(parolaUtente);
console.log(palindroma);

// Creare una funzione per capire se la parola inserita è palindroma
function parolaPalindroma(parola) {
    var risultato = '';

    for (var i = parola.length - 1; i >= 0; i--) {

        risultato += parola[i];
    }

    if (parola == risultato) {
        return 'Parola Palindroma';
    }
    
    return 'Parola non Palindroma';
}


/**
 * PARI E DISPARI
 * 
 * L’utente sceglie pari o dispari e un numero da 1 a 5. 
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
 * Sommiamo i due numeri.
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
 * Dichiariamo chi ha vinto.
*/

var sceltaUtente1
var sceltaUtente2

// L’utente sceglie pari o dispari e un numero da 1 a 5. 
sceltaUtente1 = prompt('Scegli Pari o Dispari:');
sceltaUtente1 = sceltaUtente1.charAt(0).toUpperCase() + sceltaUtente1.slice(1);
console.log('Scelta Utente: ', sceltaUtente1);

sceltaUtente2 = parseInt( prompt('Scegli un numero da 1 a 5:') );
console.log('Numero Utente: ', sceltaUtente2);

// Invocazioni
var numComputer = numeroRandom(1, 5);
console.log('Numero Computer: ', numComputer);

var sommaNum = somma(sceltaUtente2, numComputer);
console.log('Somma dei due numeri: ', sommaNum);

var numPari = pariDispari(sommaNum);

if (numPari == 'Pari') {
    console.log('Pari');
}
else {
    console.log('Dispari');  
}

// Dichiarazione del vincitore
if (sceltaUtente1 == 'Pari' && numPari == 'Pari') {
    console.log('Hai Vinto!');
}
else if (sceltaUtente1 == 'Pari' && numPari == 'Dispari') {
    console.log('Hai Perso!');
}
else if (sceltaUtente1 == 'Dispari' && numPari == 'Pari') {
    console.log('Hai Perso');
}
else if (sceltaUtente1 == 'Dispari' && numPari == 'Dispari') {
    console.log('Hai Vinto');
}

// FUNZIONI
// Funzione numero random
function numeroRandom(a, b) {
var risultato = Math.floor( Math.random() * 5 ) + 1;
    return risultato;
}

// Funzione Somma
function somma(a, b) {
    return a + b;
}

// Funzione Pari o Dispari
function pariDispari(a) {
    if (a % 2 == 0) {
        return 'Pari';
    }

    return 'Dispari';
}






