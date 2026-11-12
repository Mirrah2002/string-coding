//Method 1: For...of Loop with Set / Regex
export function loopWithSetMethod(str) {
    let vowels = 0;
    let consonants = 0;
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let char of str.toLowerCase()) {
        // Check if the character is a letter from a to z
        if (char >= 'a' && char <= 'z') {
            if (vowelSet.has(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return { vowels, consonants };
}

//Method 2: Regular Expressions (Most Concise)
export function regexMethod(str) {
    // Match vowels (case-insensitive)
    const vowelMatches = str.match(/[aeiou]/gi);
    
    // Match consonants (letters a-z excluding vowels)
    const consonantMatches = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);

    return {
        vowels: vowelMatches ? vowelMatches.length : 0,
        consonants: consonantMatches ? consonantMatches.length : 0
    };
}

//Method 3: Without Built-In Helpers (Pure ASCII Logic)
export function asciiMethod(str) {
    let vowels = 0;
    let consonants = 0;

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        // Convert uppercase ASCII (65-90) to lowercase (97-122)
        if (code >= 65 && code <= 90) {
            code += 32;
        }

        // Check if it is a lowercase letter (a-z)
        if (code >= 97 && code <= 122) {
            // Check ASCII codes for 'a', 'e', 'i', 'o', 'u'
            if (code === 97 || code === 101 || code === 105 || code === 111 || code === 117) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return { vowels, consonants };
}

/*
Method	            Time Complexity	       Space Complexity	        Best Use Case
Loop + Set	            O(n)	                O(1)	        Best balance of speed, readability, and low memory.
Regex .match()	        O(n)	                O(n)	        Shortest code for small to medium strings.
Pure ASCII Loop	        O(n)	                O(1)	        Interviews banning built-in string/regex methods.
*/
