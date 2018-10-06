import getRandomNumber from '../utils';
import startGame from '..';

const getProgression = () => {
  let number = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const stepsCount = 10;
  const randomStep = getRandomNumber(0, 10);
  const progression = [];
  let rightAnswer;
  for (let i = 0; i < stepsCount; i += 1) {
    switch (randomStep) {
      case 0:
        rightAnswer = number;
        progression.push('..');
        break;
      case i:
        number += step;
        rightAnswer = number;
        progression.push('..');
        break;
      default:
        number += step;
        progression.push(number);
    }
  }
  return [progression, rightAnswer];
};
const description = 'What number is missing in this progression?';
const getQuestion = () => {
  const [progression, rightAnswer] = getProgression();
  const question = progression.join(' ');
  return [String(rightAnswer), question];
};

export default () => startGame(getQuestion, description);
