import startGame, { getRandomNumber } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getLargestDivisor = (a, b) => (b === 0 ? a : getLargestDivisor(b, a % b));

const getRoundData = () => {
  const randomNum1 = getRandomNumber(0, 100);
  const randomNum2 = getRandomNumber(0, 100);
  const correctAnswer = getLargestDivisor(randomNum1, randomNum2).toString();
  const question = `${randomNum1} ${randomNum2}`;
  return { correctAnswer, question };
};

const runGame = () => startGame(description, getRoundData);
export default runGame;
