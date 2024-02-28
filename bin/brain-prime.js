#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/cli.js';

const Name = welcomeUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const q = Math.round(Math.random() * 100) + 2;

const task = () => {
    const q = Math.round(Math.random() * 100);
    let a = '';
    if (q % 2 === 0) {
      a = 'no';
    } else {
      a = 'yes';
    }
    return [q, a];
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
