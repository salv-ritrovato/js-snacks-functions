/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
// Dichiara la funzione qui.
function sameLetters(array, letter) {
    const myLetters = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === letter) {
            myLetters.push(array[i])
        }
    }
    return myLetters
}
// Invoca la funzione qui e stampa il risultato in console
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(sameLetters(names, 'A'));

// ARROW FUNCTION 
const letters = (array, letter) => { 
    const myLettersA = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === letter) {
            myLettersA.push(array[i])
        }
}
return myLettersA
}

console.log(letters(names, 'L'));


