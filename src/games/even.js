import readlineSync from 'readline-sync';

const isEven = number => number % 2 === 0;
const attemptsCount = 3;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < attemptsCount; i += 1) {
    const question = Math.floor(Math.random() * 100);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
