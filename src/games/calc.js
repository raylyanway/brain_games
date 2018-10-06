import getRandomNumber from '../utils';
import startGame from '../index';

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
  return { rightAnswer: String(rightAnswer), question };
};

export default () => startGame(getQuestion, description);
