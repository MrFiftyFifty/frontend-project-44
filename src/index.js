import readline from 'readline-sync';

const ROUNDS = 3;

const startGame = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readline.question('What is your name? ');

  console.log(`Hello, ${playerName}!`);

  console.log(description);

  for (let round = 1; round <= ROUNDS; round += 1) {
    const { correctAnswer, question } = getRoundData();

    console.log(`Question: ${question}`);

    const answer = readline.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
