import readlineSync from 'readline-sync';

export default () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  let winner = true;
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 100);
    const isEven = (num % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isEven) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
      console.log(`Let's try again, ${name}!`);
      winner = false;
      break;
    }
  }
  if (winner) {
    console.log(`Congratulations, ${name}!`);
  }
};
