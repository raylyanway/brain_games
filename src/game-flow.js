import readlineSync from 'readline-sync';

export const isEven = number => number % 2 === 0;
export const randomNumber = () => Math.floor(Math.random() * 100);
const greeting = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};
export const start = (attemptsCount, getQuestion, message) => {
  const userName = greeting(message);
  for (let i = 0; i < attemptsCount; i += 1) {
    const question = getQuestion();
    console.log(`Question: ${question.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === question.rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question.rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
