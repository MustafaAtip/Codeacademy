let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 20;

if (registeredEarly && age > 18){
  raceNumber += 1000;
}

if (registeredEarly && age > 18){
  console.log(`Runner ${raceNumber}: Race starts at 9:30am!`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Runner ${raceNumber}: Race starts at 11:00am!`);
} else if (age < 18) {
  console.log(`Runner ${raceNumber}: Race starts at 12:30pm!`);
}