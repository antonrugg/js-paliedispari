// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

console.log('js ok');

function checkIfPalindrome(word) {
    const len = word.length;

    for (let i = 0; i < len / 2; i++){
        if (word[i] !== word[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const word = prompt('Enter a word to check if it is a palindrome: ');

const value = checkIfPalindrome(word);

console.log(value);

