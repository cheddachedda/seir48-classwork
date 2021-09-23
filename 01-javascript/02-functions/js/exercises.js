// The Fortune Teller

const tellFortune = function(numChildren, partnerName, geoLocation, jobTitle) {
  let fortune = '';
  fortune += `You will be a ${jobTitle}`;
  fortune += ` in ${geoLocation}`;
  fortune += `, and married to ${partnerName}`;
  fortune += ` with ${numChildren} `;
  fortune += numChildren === 1 ? 'kid' : 'kids';
  console.log(fortune);
}

tellFortune(1, "Katie", "Melbourne", "teacher");
tellFortune(2, "Louise", "Sydney", "sales rep");
tellFortune(3, "Ben", "Adelaide", "nurse");
tellFortune(7, "Andrew", "Perth", "boxing instructor");


// The Puppy Age Calculator

// With the bonus task, it's a terrible way of writing a function.
// Should be two separate functions.
const calculateDogAge = function(age, toHumanYears = false) {
  const humanYears = Math.floor(age / 7);
  const dogYears = Math.floor(age * 7);
  const ageToLog = toHumanYears ? humanYears : dogYears
  const type = toHumanYears ? 'human' : 'dog';
  console.log(`Your doggie is ${ageToLog} ${ageToLog === 1 ? 'year' : 'years'} old in ${type} years!`);
}

calculateDogAge(7, true);
calculateDogAge(70);
calculateDogAge(16, true);


// The Lifetime Supply Calculator

const calculateSupply = function(age, dailyAmount) {
  const deathAge = 82;
  const yearlyAmount = dailyAmount * 365.25;
  const yearsRemaining = deathAge - age;
  const lifetimeSupply = Math.ceil(yearlyAmount * yearsRemaining);
  console.log(`You will need ${lifetimeSupply} to last you until the ripe old age of ${deathAge}`);
}

calculateSupply(27, 11);
calculateSupply(70, 3.2);
calculateSupply(45, 68.17);


// The Geometrizer

const calcCircumference = function(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference}`);
}

const calcArea = function(radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area is ${area}`);
}

calcCircumference(16);
calcArea(16);

// The Temperature Converter

const celsiusToFahrenheit = function(celsius) {
  const fahrenheit = Math.round(celsius / 5 * 9 + 32);
  console.log(`${celsius}°C is ${fahrenheit}°F`);
}

const fahrenheitToCelsius = function(fahrenheit) {
  const celsius = Math.round((fahrenheit - 32) * 5 / 9);
  console.log(`${fahrenheit}°F is ${celsius}°C`);
}

celsiusToFahrenheit(32);
fahrenheitToCelsius(32);
