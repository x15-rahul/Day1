const jim = 100;
const dela = 97;
const chinku = 99;

function getMax(number1, number2, number3){
    const result = Math.max(number1, number2, number3);
    return result;
}

const winner = getMax(jim, dela, chinku);
console.log(winner);

function getMin(number1, number2, number3){
    const result = Math.min(number1, number2, number3);
    return result;
}

const looser = getMin(jim, dela, chinku);
console.log(looser);

/* function getMax(number1, number2, number3){
    if(number1 > number2 && number1 > number3){
        return number1;
    } else if (number2 > number1 && number2 > number3){
        return number2;
    } else {
        return number3;
    }
}

const winner = getMax(jim, dela, chinku);
console.log(winner); */