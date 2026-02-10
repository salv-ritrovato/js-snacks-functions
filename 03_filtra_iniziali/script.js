/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const myLetters = [];
// Dichiara la funzione qui.
function sameLetters() {
    for (let i = 0; i < names.length; i++) {
        if (names[i].charAt(0) === 'A') {
            myLetters.push(names[i])
        }
}
return myLetters
}
// Invoca la funzione qui e stampa il risultato in console
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(sameLetters());

// ARROW FUNCTION 
const myLettersA = [];
const letters = () => { 
    for (let i = 0; i < names.length; i++) {
        if (names[i].charAt(0) === 'A') {
            myLetters.push(names[i])
        }
}
return myLetters
}

console.log(letters());


