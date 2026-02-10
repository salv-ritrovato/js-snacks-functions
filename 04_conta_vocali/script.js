/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
const word = 'javascript';

// Dichiara la funzione qui
function vowels(value) {
    const vowelsHolder = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i].toLowerCase() === 'a' || value[i].toLowerCase() === 'e' || value[i].toLowerCase() === 'i' || value[i].toLowerCase() === 'o' || value[i].toLowerCase() === 'u') {
            vowelsHolder.push(value[i])
        }
}
return vowelsHolder.length
}

// Invoca la funzione qui e stampa il risultato in console
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(vowels(word));

// ARROW FUNCTION 
const vowelS = (value) => {
    const vowelsHolderA = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i].toLowerCase() === 'a' || value[i].toLowerCase() === 'e' || value[i].toLowerCase() === 'i' || value[i].toLowerCase() === 'o' || value[i].toLowerCase() === 'u') {
            vowelsHolderA.push(value[i])
        }
}
return vowelsHolderA.length
}
console.log(vowelS(word));



// METODO ALTERNATIVO
/* function count() {
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    let contatore = 0;
    for (let i = 0; i < word.length; i++) {
         let char = word[i];
    for (let j = 0; j < vocali.length; j++) {
    if (char === vocali[j]) {
        contatore++;
        }
    }
}
return contatore;
}

console.log(count()); */
