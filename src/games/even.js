import startGame, { getRandomNumber, isEven } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const randomNum = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = randomNum;
  return { correctAnswer, question };
};
const runGame = () => startGame(description, getRoundData);

export default runGame;
