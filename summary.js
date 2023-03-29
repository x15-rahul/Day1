// working with string
const myName = 'Rahul Biswas';
const myString = 'What the fuck you are doing! What the hell';
const nickName = ' Sumit ';
// console.log(myName.indexOf('Bis'))
// console.log(myName.includes('Biswas'));
// for(const char of myName){
//     console.log(char);
// }

// console.log(myName.concat(' ', nickName));
// console.log(myName.toUpperCase());
// const replacedWord = myString.replaceAll('the', 'Sumit');
// console.log(replacedWord);
// console.log(myName);
// const slicedWord = myName.slice(0, 5);
// console.log(slicedWord);
// console.log(myName);

// const splitedWord = myString.split(' ');
// // console.log(splitedWord.join('|'));
// console.log(splitedWord.join('|'));

// console.log(myName.endsWith('was'));
// console.log(myString.lastIndexOf('the'));
// console.log(nickName);
// console.log(nickName.trim());

// console.log(myName.substring(0, 5));
// console.log(myName.slice(0, 5));

const myNumber = -10;
const mySecondNumber = 3.01;
const jimGot = 30;
const bellaGot = 45;
// const gap = Math.abs(jimGot - bellaGot);
// if(gap <= 5 ){
//     console.log('Jim and Bella can be friends');
// } else {
//     console.log('Jim and Bella stay apart');
// }
// console.log(Math.abs(Math.pow(myNumber, 3)));

// console.log(Math.round(mySecondNumber));
// console.log(Math.floor(mySecondNumber));
// console.log(Math.ceil(mySecondNumber));

// for(i = 0; i < 10; i++){
//     console.log(Math.round(Math.random() * 10));
// }

// let num1 = 45;
// let num2 = 20;

// function swapVariable(number1, number2){
//     let temp;
//     temp = number1;
//     number1 = number2;
//     number2 = temp;

//     console.log(number1, number2);
// }
//  swapVariable(num1, num2);

// [num1, num2] = [num2, num1];
// console.log(num1, num2);

// const numbers = [12, 101, 43, 23, 42, 58, 54, 41, 102];

// function getMaxValue(array){
//     let maxValue = array[0];
//     for(const number of array){
//         if(maxValue < number){
//             maxValue = number
//         } else {
//             continue;
//         }
//     }
//     return maxValue;

    
    
// }

const numbers = [12, 4, 101, 43, 23, 105, 42, 58, 54, 10, 41, 102];
// const maxValue = getMaxValue(numbers);
// console.log(maxValue);

// function getMinValue(array){
//     let minValue = array[0];
//     for(i = 0; i < array.length; i++){
//         if(minValue > array[i]){
//             minValue = array[i];
//         } else {
//             continue;
//         }
//     }
//     const minValue = Math.min(...array);
//     return minValue;
// }

// const minValue = getMinValue(numbers);
// console.log(minValue);

// function reversedWord(string){
//     let newWord = '';
//     const splitedWord = string.split(' ');
//     for(let i = splitedWord.length - 1; i >= 0; i--){
//         // newWord.concat(' ', splitedWord[i]);
//         newWord = newWord.concat(' ',splitedWord[i]);
//     }
//     return newWord;
// }
// const reverseWord = reversedWord(myName);
// console.log(reverseWord.trim());

// function reversedString(string){
//     let newString = '';
//     for(let i = string.length - 1; i >= 0; i--){
//         newString = newString.concat(string[i]);
//     }
//     return newString;
// }
// console.log(reversedString(myName));


const number = 12;
function getFibo(number){
    const array = [0, 1];
    for(i = 2; i <= number; i++){
        array[i] = array[i - 1] + array[ i - 2 ];
    }
    return array;
}

const fiboSeries = getFibo(number);
console.log(fiboSeries);