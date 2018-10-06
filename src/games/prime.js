import getRandomNumber from '../utils';
import startGame from '..';

const isPrime = (number) => {
  if (number === 1) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestion = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [rightAnswer, question];
};

export default () => startGame(getQuestion, description);
