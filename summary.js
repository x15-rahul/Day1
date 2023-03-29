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

const num1 = 45;
const num2 = 20;

function swapVariable(number1, number2){
    let temp;
    temp = number1;
    number1 = number2;
    number2 = temp;

    console.log(number1, number2);
}
 swapVariable(num1, num2);