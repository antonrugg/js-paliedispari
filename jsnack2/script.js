console.log('js ok');

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.


function randomNumber(min, max) {
   
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}


function isEvenOrOdd(userNumber, computerNumber) {
    console.log(sum(userNumber, computerNumber));
    if (sumOfNumbers % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
    

    
};

function sum(userNumber, computerNumber) {
    return userNumber + computerNumber;
}




const userChoice = prompt('Choose even or odd');
const userNumber = parseInt(prompt('Enter a number between 1 and 5'));
const computerNumber = randomNumber(1, 5);
const sumOfNumbers = sum(userNumber, computerNumber);
const victoryCheck = isEvenOrOdd(userNumber, computerNumber);



if (victoryCheck === userChoice) {
    console.log('User Win!');
} else {
    console.log('Computer Win!');
}




