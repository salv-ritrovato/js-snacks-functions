/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */
const userName = 'Mario';

// Dichiara la funzione qui.
function waveAt(name) {
    const salute = 'Ciao' + ' ' + name
    return salute
}
// Invoca la funzione qui e stampa il risultato in console
// Risultato atteso se si passa 'Mario': // ciao Mario
console.log(waveAt(userName));

// ARROW FUNCTION 
const hello = (name) => 'Ciao ' + name;
console.log(hello("Mario"));