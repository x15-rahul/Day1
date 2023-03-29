const array = [134, 153, 245, 140, 163, 243];
function maxInArray(heights){
    let tall = 0;
    for(const height of heights) {
        if(height > tall){
            tall = height;
        } else {
            continue;
        }
   }
   return tall;
}

const tallest = maxInArray(array);
console.log(tallest);

function maxInArray(heights){
    const tall = Math.max(...heights);
    return tall;
}
const tallest2 = maxInArray(array);
console.log(tallest2);

