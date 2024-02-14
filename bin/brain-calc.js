#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/cli.js';

const Name = welcomeUser();

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

console.log('What is the result of the expression');
  const task = () => {
    const num1 = randomNum(1, 100);
    const num2 = randomNum(1, 100);
    
    const signs = ["+", "-", "*"]
    const sign = signs[randomNum(0,2)];
    const ques = `${num1} ${sign} ${num2}`

    let result = 0
    switch (sign) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        default:
            result = null;
    }
    return [ques, result]
  };
  let correct = 0;
  for (let i = 0; i < 3; i += 1) {
    const quesandres = task();
    console.log("Question:", quesandres[0]);
    const answer = readlineSync.question('Your answer: ')

    const rightanswer = `${quesandres[1]}`;

    if (answer === rightanswer) {
        console.log("Correct!");
        correct += 1;
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${rightanswer})`)
        console.log(`Let's try again ${Name}`)
        break
    }
}

  if (correct === 3){
    console.log(`Congratulations, ${Name}!`)
  }