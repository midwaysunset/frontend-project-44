#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/cli.js';

const Name = welcomeUser();
console.log('Find the greatest common divisor of given numbers.');

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const task = () => {
    const num1 = randomNum(1, 100);
    const num2 = randomNum(1, 100);
    const gcd = (a, b) => {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    };
    const gcdResult = gcd(num1, num2);
    return [`${num1} ${num2}`, gcdResult];
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
