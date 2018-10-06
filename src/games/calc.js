import getRandomNumber from '../utils';
import startGame from '..';

const description = 'What is the result of the expression?';
const getQuestion = () => {
  let rightAnswer;
  let question;
  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(1, 10);
  const randomNumber = getRandomNumber(1, 10);
  switch (randomNumber) {
    case randomNumber > 6:
      rightAnswer = a - b;
      question = `${a} - ${b}`;
      break;
    case randomNumber < 3:
      rightAnswer = a + b;
      question = `${a} + ${b}`;
      break;
    default:
      rightAnswer = a * b;
      question = `${a} * ${b}`;
      break;
  }
  return [String(rightAnswer), question];
};

export default () => startGame(getQuestion, description);
