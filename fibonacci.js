const array = [0, 1];
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function getFibo(number){
    for(let i = 2; i <= number; i++){
        array[i] = array[i - 1] + array[i - 2];
        
    }
    return array;
    
}

const fibonacci = getFibo(9);
console.log(fibonacci);