/*Determining how many hours of sleep you got each night of the week*/
const getSleepHours = (day) => {
  if (day === 'monday') {
      return 8; 
  } else if (day === 'tuesday') {
      return 6;
  } else if (day === 'wednesday') {
      return 7;
  } else if (day === 'thursday') {
      return 5;
  } else if (day === 'friday') {
      return 6;
  } else if (day === 'saturday') {
      return 7;
  } else if (day === 'sunday') {
      return 9;
    }
  }

//Determining the actual sleep hours
const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours     ('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

//Determining the ideal sleep hours
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
// it’s time to calculate the sleep debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got enough sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + 'hour(s) more sleep than you needed this week!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Get some rest!');
  } else
    console.log('Error!');
};
calculateSleepDebt();
