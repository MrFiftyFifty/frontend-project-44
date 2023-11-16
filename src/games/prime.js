import startGame, { getRandomNumber } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let a = 2; a < number; a += 1) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const randomNum = getRandomNumber(1, 100);

  const isNumPrime = isPrime(randomNum);

  const correctAnswer = isNumPrime ? 'yes' : 'no';

  return {
    question: randomNum,
    correctAnswer,
  };
};

const runGame = () => startGame(description, getRoundData);
export default runGame;
