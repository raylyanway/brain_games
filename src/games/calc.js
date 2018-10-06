import { randomNumber, start } from '../game-flow';

const message = 'What is the result of the expression?';
const attemptsCount = 3;
const getQuestion = () => {
  const a = randomNumber();
  const b = randomNumber();
  const sign = randomNumber();
  let rightAnswer = a * b;
  let question = `${a} * ${b}`;
  if (sign < 33) {
    rightAnswer = a + b;
    question = `${a} + ${b}`;
  } else if (sign > 66) {
    rightAnswer = a - b;
    question = `${a} - ${b}`;
  }
  return { rightAnswer: String(rightAnswer), question };
};

export default () => {
  start(attemptsCount, getQuestion, message);
};
