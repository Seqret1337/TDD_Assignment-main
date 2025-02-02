import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function formatName(name) {
    if (typeof name !== "string") {
        return null;
    }

    const trimName = name.trim();
    
    if (trimName === "") {
        return "";
    }

    const specialCharacters = "!@#$%^&*()-_=+[{]};:'\",<.>/?\\|";

    for (let char of trimName) {
        if (specialCharacters.includes(char)) {
            return null;
        }
    }

    return trimName.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("formatName");

tests.isEqual(formatName(2), null, "If `name` is not a string, return null.");
tests.isEqual(formatName("  alexander  "), "Alexander", "Remove any leading or trailing whitespace from the string.");
tests.isEqual(formatName("alexander nordvaag"), "Alexander Nordvaag", "Capitalize the first letter of each word in the name");
tests.isEqual(formatName("   "), "", "If the string is empty (after trimming), return an empty string.");
tests.isEqual(formatName("!@#$%^&*()-_=+[{]};:'\",<.>/?\\|"), null, "If the string contains special characters return null.");

//#endregion