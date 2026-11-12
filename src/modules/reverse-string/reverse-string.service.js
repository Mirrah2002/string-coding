/**
 * Reverse String Implementation Methods
 */

// 1. Decrementing for loop
export function reverseWithDecrementLoop(str) {
    let reversed = "";
    // Start at the last index and loop backwards to 0
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Append each character
    }
    return reversed;
}

// 2. Incrementing For .. of Loop
export function reverseWithForOfLoop(str) {
    let reversed = "";
    // Loop through each character of the string
    for (let char of str) {
        reversed = char + reversed; // Prepend the character
    }
    return reversed;
}

// 3. Recursion
export function reverseWithRecursion(str) {
    // Base case: if the string has 0 or 1 character, return it directly
    if (str.length <= 1) {
        return str;
    }
    // Recursive case: slice from the second character, and add the first character to the end
    return reverseWithRecursion(str.slice(1)) + str[0];
}
