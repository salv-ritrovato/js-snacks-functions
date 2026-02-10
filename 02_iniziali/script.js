/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function arr(array) {
    const arrayInitials = [];
    for (let i = 0; i < array.length; i++) {
        arrayInitials.push(array[i][0])
    }
    return arrayInitials
}
// Invoca la funzione qui e stampa il risultato in console
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(arr(names))

// ARROW FUNCTION 
const initials = (array) => {
    const arrayInitialsB = [];
    for (let i = 0; i < array.length; i++) {
        arrayInitialsB.push(array[i][0])
    }
    return arrayInitialsB
}
console.log(initials(names))