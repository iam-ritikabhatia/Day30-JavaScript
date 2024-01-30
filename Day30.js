// Math.cosh() method is used to calculate the hyperbolic cosine of a number.

// cosh(x) = ( (e^x) + (e^-x) ) / 2  this is the mathematical formula of cosh(x)

let x = 20;

let Self = ( (Math.E ** x) + (Math.E ** -x) ) / 2;

let usingcoshMethod = Math.cosh(x);

console.log(usingcoshMethod);

console.log(Self == usingcoshMethod); // Output is false, because of precision values


/******************************exp.js*****************************/

// Math.exp() method is used to calculate the value of e raised powers.

console.log(Math.exp(0)); // Output is 1

console.log(Math.exp(2)); // Output is 7.38905609893065

console.log(Math.exp(1/2)); // Output is 1.6487212707001282