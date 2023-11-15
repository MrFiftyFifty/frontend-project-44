import startGame from './index.js';

const getRandomNumber = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => Math.abs(number) % 2 === 0;

const getRoundData = () => {
  const randomNum = getRandomNumber(0, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = randomNum;
  return { correctAnswer, question };
};
const runGame = () => startGame(description, getRoundData);

export default runGame;
