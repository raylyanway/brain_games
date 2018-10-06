import readlineSync from 'readline-sync';

const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};
const attemptsCount = 3;

export default (getQuestion, description) => {
  const userName = greeting(description);
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
