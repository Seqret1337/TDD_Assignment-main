import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
    if (typeof target !== "number" || !Number.isInteger(target) || target < 0) {
        return null;
    }
    if (typeof guess !== "number" || !Number.isInteger(guess) || guess < 0) {
        return null;
    }
    if (guess < target) {
        return "Too low";
    }
    else if (guess > target) {
        return "Too high";
    }
    else if (guess === target) {
        return "Correct!"
    }
}


//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("guessNumber function");

// Basic cases
tests.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
tests.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
tests.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

// Invalid inputs
tests.isEqual(guessNumber(-1, 5), null, "Negative target should return null");
tests.isEqual(guessNumber(5, -1), null, "Negative guess should return null");
tests.isEqual(guessNumber(1.5, 2), null, "Non-integer target should return null");
tests.isEqual(guessNumber(2, 1.5), null, "Non-integer guess should return null");
tests.isEqual(guessNumber("yes", 2), null, "String target should return null");
tests.isEqual(guessNumber(2, "yes"), null, "String guess should return null");
tests.isEqual(guessNumber(null, 2), null, "null target should return null");
tests.isEqual(guessNumber(2, null), null, "null guess should return null");
tests.isEqual(guessNumber(), null, "Missing parameters should return null");

// Edge cases
tests.isEqual(guessNumber(-1), null, "Negative input should return null");
tests.isEqual(guessNumber(1.5), null, "Non-integer input should return null");
tests.isEqual(guessNumber("5"), null, "String input should return null");
tests.isEqual(guessNumber(null), null, "Null input should return null");

//#endregion
