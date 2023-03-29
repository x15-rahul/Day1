const text = 'Rahul Biswas';

/* function reverseString(string){
    let newString = '';
    for(let i = string.length - 1; i >= 0; i--){
        newString = newString.concat(string[i]);
    }
    return newString;
}
const result = reverseString(text);
console.log(result); */

function reverseWord(string){
    let newString = '';
    const array = string.split(' ');
    for(i = array.length - 1; i >= 0; i--){
        newString = newString.concat(array[i], ' ');
    }
    return newString.trim();
}

const reversedWord = reverseWord(text);
console.log(reversedWord);