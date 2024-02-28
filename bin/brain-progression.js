#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/cli.js';

const Name = welcomeUser();
console.log('What number is missing in the progression?');

const task = () => {
  const arrayLength = Math.floor(Math.random() * 5) + 5; // Случайная длина массива
  const progressDelta = Math.floor(Math.random() * 10); // шаг прогрессии
  const firstNumber = Math.floor(Math.random() * 100); // начально значение прогрессии
  const progression = [];
  progression.push(firstNumber);
  for (let i = 1; i < arrayLength; i += 1) {
    progression.push(progression[i - 1] + progressDelta); // наполняем массив прогрессии
  }
  const emptyIndex = Math.floor(Math.random() * arrayLength); // индекс числа
  const answer = `${progression[emptyIndex]}`;
  progression[emptyIndex] = '..';

  return [progression.join(' '), answer];
};

let correct = 0;
for (let i = 0; i < 3; i += 1) {
    const quesAndRes = task();
    console.log("Question:", quesAndRes[0]);
    const answer = readlineSync.question('Your answer: ');

    const rightAnswer = `${quesAndRes[1]}`;

    if (answer === rightAnswer) {
        console.log("Correct!");
        correct += 1;
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer})`);
        console.log(`Let's try again ${Name}`);
        break;
    }
}

if (correct === 3) {
    console.log(`Congratulations, ${Name}!`);
}
