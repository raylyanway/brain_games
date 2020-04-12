import getRandomNumber from '../utils';
import startGame from '..';

const isPrime = (number) => {
  if (number < 2) return false;
  const sqrtNumber = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= sqrtNumber; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestion = () => {
  const question = getRandomNumber(-10, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [rightAnswer, question];
};

export default () => startGame(getQuestion, description);
