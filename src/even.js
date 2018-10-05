import readlineSync from 'readline-sync';

const isEven = number => number % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  const attemptsCount = 3;
  for (let i = 0; i < attemptsCount; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const check = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === check) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${check}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
