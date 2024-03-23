import cowGreeter from "./cowGreeter.js";
import {createInterface} from 'node:readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function getInputs(command) {
  console.log(`Hello ${command}, hope you enjoy your day 🐮`)
  rl.question("How do you feel on a score of 1-10? ", (answer) => {
    if(answer >= 8) {
      console.log("I see you're having a wonderful day");
    }
    rl.close();
    if(answer < 8) {
      console.log("Cheer up: Don't worry, everything thing is going be alright 🎶")
    }
    rl.close();
  })
}

function getCommand() {
  rl.question('What is your name?\n', (command) => {
    getInputs(command);
  });
}

export default getCommand;