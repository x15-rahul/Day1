const myAddress = 'Kalkolia Para, Magura';
const country = 'Bangladesh';

const sliced = myAddress.slice(3, 8);
console.log(sliced);
console.log(myAddress);

const userName = 'rahulBiswas';
console.log(userName.toUpperCase());
const user1 = 'RahulBiswas';
console.log(user1.toLowerCase());

if(userName.toLowerCase() === user1.toLowerCase()){
    console.log('valid user');
} else {
    console.log('invalid user');
}