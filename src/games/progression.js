import getRandomNumber from '../utils';
import startGame from '..';

const progressionLength = 10;
const getProgression = () => {
  const firstElementPosition = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const hiddenElementPosition = getRandomNumber(0, 10);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElementPosition + step * i);
  }
  const rightAnswer = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = '..';
  return [progression, rightAnswer];
};
const description = 'What number is missing in this progression?';
const getQuestion = () => {
  const [progression, rightAnswer] = getProgression();
  const question = progression.join(' ');
  return [String(rightAnswer), question];
};

export default () => startGame(getQuestion, description);
