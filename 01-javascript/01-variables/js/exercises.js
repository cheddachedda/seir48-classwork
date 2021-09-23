// The Fortune Teller

let numChildren = 0;
let partnerName = 'Emily';
let geoLocation = 'Melbourne';
let jobTitle = 'SEI48 Student';

let fortune = '';
fortune += `You will be a ${jobTitle}`;
fortune += ` in ${geoLocation}`;
fortune += `, and married to ${partnerName}`;
fortune += ` with ${numChildren}`;
console.log(fortune);

// The Age Calculator

let currentYear = 2021;
let birthYear = 1994;
const possibleAges = [currentYear-1-birthYear, currentYear-birthYear];
console.log(`They are either ${possibleAges[0]} or ${possibleAges[1]}`);

// The Lifetime Supply Calculator

let currentAge = 27;
let maximumAge = 55;
let dailyAmount = 4;
const yearsRemaining = maximumAge - currentAge;
const yearlyAmount = dailyAmount * 365.25;
const lifetimeSupply = yearsRemaining *  yearlyAmount;
console.log(`You will need ${lifetimeSupply} to last you until the ripe old age of ${maximumAge}`);

// The Geometrizer

let radius = 16;

const circumference = 2 * Math.PI * radius;
console.log(`The circumference is ${circumference}`);

const area = Math.PI * radius * radius;
console.log(`The area is ${area}`);

// The Temperature Converter

let celsius = 11;
const celsiusToFahrenheit = Math.round(celsius / 5 * 9 + 32);
console.log(`${celsius}°C is ${celsiusToFahrenheit}°F`);

let fahrenheit = 80;
const fahrenheitToCelsius = Math.round((fahrenheit - 32) * 5 / 9);
console.log(`${fahrenheit}°F is ${fahrenheitToCelsius}°C`);
