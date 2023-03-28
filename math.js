const number = 4;
// console.log(Math.abs(Math.pow(number, 3)));

const num1 = 20;
const num2 = 45;
const gap = Math.abs(num1 - num2);
if(gap <= 5){
    // console.log('You can be friends');
} else {
    // console.log('Stay Apart!!!');
}

const number2 = 2.99;
// console.log(Math.round(number2));
// console.log(Math.floor(number2));

// const randomNumber = Math.random();
for(let i = 0; i < 10; i++){
    console.log('Random Number', Math.round(Math.random() * 10));
}