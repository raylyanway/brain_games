import getRandomNumber from '../utils';
import startGame from '..';

const getGcd = (a, b) => {
  if (b === 0) return Math.abs(a);
  return getGcd(b, a % b);
};
const description = 'Find the greatest common divisor of given numbers.';
const getQuestion = () => {
  const a = getRandomNumber(-100, 100);
  const b = getRandomNumber(-100, 100);
  const question = `${a} ${b}`;
  const rightAnswer = getGcd(a, b);
  return [String(rightAnswer), question];
};

export default () => startGame(getQuestion, description);
