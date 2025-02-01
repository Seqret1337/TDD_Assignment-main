import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function multiply(...numbers) {
    if (numbers.length === 0) return 0;
    if (numbers.some(num => num === null || num === undefined)) {
        return NaN;
    }
    
    let sum = numbers.reduce((result, num) => result * num, 1);
    return sum;
}

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("Sum function");

tests.isEqual(multiply(1, 2), 2, "1 Multiplied by 2 should be 2");
tests.isEqual(multiply(-5, 5), -25, "-5 Multiplied by 5 should be -25");
tests.isEqual(multiply(2.5, 3.5), 8.75, "2.5 Multiplied by 3.5 should be 8.75");
tests.isEqual(multiply("1", 2), 2, '"1" Multiplied by 2 should return 2"');
tests.isEqual(multiply(4, 4, 4, 4), 256, ' 4 Multiplied by 4 Multiplied by 4 Multiplied by 4 should return 256');

// Invalid inputs
tests.isNotANumber(multiply(1, null), "1 Multiplied by null should return NaN");
tests.isNotANumber(multiply(undefined, 3), "undefined Multiplied by 3 should return NaN");
tests.isNotANumber(multiply(NaN, 3), "NaN Multiplied by 3 should return NaN");
tests.isNotANumber(multiply("yes", 3), "yes Multiplied by 3 should return NaN");

// Edge cases
tests.isEqual(multiply(), 0, "no parameters should return 0");
tests.isEqual(multiply(0, 0), 0, "0 Multiplied by 0 should be 0");
tests.isEqual(multiply(Infinity, 1), Infinity, "Infinity Multiplied by 1 should be Infinity");
tests.isEqual(multiply(-Infinity, 1), -Infinity, "-Infinity Multiplied by 1 should be -Infinity");


//#endregion