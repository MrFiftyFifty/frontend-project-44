import startGame, { getRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, count) => {
  const arithmeticProgress = [];
  for (let i = 0; i < count; i += 1) {
    arithmeticProgress.push(start + step * i);
  }
  return arithmeticProgress;
};

const getRoundData = () => {
  const randomNum = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 10);
  const count = getRandomNumber(5, 10);
  const randomPosition = getRandomNumber(0, count - 1);
  const progression = getProgression(randomNum, step, count);
  const correctAnswer = progression[randomPosition].toString();
  progression[randomPosition] = '..';
  return { correctAnswer, question: progression.join(' ') };
};

const runGame = () => startGame(description, getRoundData);
export default runGame;
