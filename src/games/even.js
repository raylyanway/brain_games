import getRandomNumber from '../utils';
import startGame from '..';

const isEven = number => number % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const getQuestion = () => {
  const question = getRandomNumber(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [rightAnswer, question];
};

export default () => startGame(getQuestion, description);
