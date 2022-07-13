'use strict'; 
console.log('laba sekmingo darbo');
 
//  debuger 
const mainArray = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
console.log(`masyvas ${mainArray}`);

console.group('3. padauginti masyvo narius is 2');
let arrCopy = mainArray.slice();

const arrLen = arrCopy.length;

for(let i = 0; i < arrLen; i++){
arrCopy[i] = arrCopy[i] * 2;

}
console.log(arrCopy);
console.groupEnd();
{
//  pakelti masyvo narius kvadratu
const mainArray = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
console.log(`masyvas ${mainArray}`);

console.group('3. padauginti masyvo narius is 2');
let arrCopy = mainArray.slice();

const arrLen = arrCopy.length;

for(let i = 0; i < arrLen; i++){
arrCopy[i] = arrCopy[i] ** 2;

}
console.log(arrCopy);
console.groupEnd();
}