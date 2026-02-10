/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
const word = 'javascript';
const vowelsHolder = [];

// Dichiara la funzione qui
function vowels() {
    for (let i = 0; i < word.length; i++)
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            vowelsHolder.push(word[i])
        }
    return vowelsHolder.length
}

// Invoca la funzione qui e stampa il risultato in console
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(vowels());
