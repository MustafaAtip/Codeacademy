//The value saved to Kevlin will be constant.
const kelvin = 0;

//Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

/*Equation to calculate Fahrenheit. Using let as this will allow us to round the value later on*/
let fahrenheit = celsius * (9/5) + 32;

//Use .floor() to round down to a whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);