const userName = 'Computer';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'What will I have for dinner?'

console.log(`The ${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random()*8);

let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'Creamy Chicken & Gnocchi.';
    break;
  case 1:
    eightBall = 'Honey Garlic Glazed Salmon.';
    break;
  case 2:
    eightBall = 'Lemon Butter Chicken Thighs.';
    break;
  case 3:
    eightBall = 'Shrimp Scampi.';
    break;
  case 4:
    eightBall = 'Garlicky Roasted Cauliflower Pasta.';
    break;
  case 5:
    eightBall = 'Creamy Mushroom Pasta.';
    break;
  case 6:
    eightBall = 'Chicken Fajitas.';
    break;
}
console.log(`The eight ball answered: ${eightBall}`);