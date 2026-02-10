/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const arrayInitials = [];

// Dichiara la funzione qui.
function arr() {
    for (let i = 0; i < names.length; i++) {
        arrayInitials.push(names[i].charAt(0))
    }
    return arrayInitials
}
// Invoca la funzione qui e stampa il risultato in console
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(arr())

// ARROW FUNCTION 
const arrayInitialsB = [];
const initials = () => {
    for (let i = 0; i < names.length; i++) {
        arrayInitialsB.push(names[i].charAt(0))
    }
    return arrayInitialsB
}
console.log(initials())