const sentence = '  Kalkolia Para. Shibrampur Road. Magura  ';
const country = 'Bangladesh';
console.log(sentence.toLowerCase().indexOf('kol'));
console.log(sentence[4]);
console.log(sentence.length);
for(let i = 0; i < sentence.length; i++){
    console.log(sentence[i]);
}
for(const char of sentence){
    console.log(char);
}

console.log(sentence.concat(' ', 'Khulna, ', country));
const sliced = sentence.slice(3, 9);
console.log(sliced);
const substring = sentence.substring(3, 9);
console.log(substring);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase().endsWith('magura'));
const replacedWord = sentence.replace('Shibrampur Road', 'Batikadanga Road');
console.log(replacedWord);
console.log(sentence.trim());