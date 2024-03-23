import {say} from "cowsay";

const cowGreeter = (text) => {
  const result = say({text});
  console.log(`Hello ${result}`);
}

export default cowGreeter;