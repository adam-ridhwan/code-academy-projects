// this sets kelvin as a variable
const kelvin = 0;

// this converts kelvin into celcius
let celcius = kelvin - 273;

// this converts to farenheit
let farenheit = celcius * (9 / 5) + 32;

// rounds the number
farenheit = Math.floor(farenheit);

console.log(`The temperature is ${farenheit} degrees Farenheit`);

let newton = celcius * (33 / 100);
console.log(Math.floor(newton));
