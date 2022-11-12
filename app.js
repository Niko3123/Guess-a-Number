function guessANumber() {
  const readline = require("readline").createInterface({
    // To include a module, use the require() function with the name of the module:
    // Creates an Interface object
    input: process.stdin,
    output: process.stdout,
  });

  let computerGuess = Math.floor(Math.random() * 100);
  // The Math.floor() method rounds a number DOWN to the nearest integer.
  //  Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
  // Math.random() used with Math.floor() can be used to return random integers.
  let guess;

  let recursiveAsyncReadLine = function () {
    readline.question("Guess the number (0 - 100): ", (number) => {
      guess = Number(number);

      if (guess <= 100 && guess >= 0) {
        if (guess == computerGuess) {
          console.log("You guess it!");
          return readline.close();
        } else if (guess < computerGuess) {
          console.log("Too Low!");
          recursiveAsyncReadLine();
        } else if (guess > computerGuess) {
          console.log("Too High!");
          recursiveAsyncReadLine();
        }
      } else {
        console.log("Invalid input! Try again...");
        recursiveAsyncReadLine();
      }
    });
  };
  recursiveAsyncReadLine();
}

guessANumber();
