export function twoPointerMethod(str) {
    const cleanStr = str.toLowerCase();
    let left = 0;
    let right = cleanStr.length - 1;

    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

export function builtInArrayMethod(str) {
    const cleanStr = str.toLowerCase();
    const reversed = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversed;
}

export function manualLoopMethod(str) {
    const cleanStr = str.toLowerCase();
    let reversed = "";

    for (let i = cleanStr.length - 1; i >= 0; i--) {
        reversed += cleanStr[i];
    }

    return cleanStr === reversed;
}

export function recursionMethod(str) {
    const cleanStr = str.toLowerCase();

    // Base case: 0 or 1 character is always a palindrome
    if (cleanStr.length <= 1) {
        return true;
    }

    // Check first and last characters
    if (cleanStr[0] !== cleanStr[cleanStr.length - 1]) {
        return false;
    }

    // Slice off the outer characters and repeat
    return recursionMethod(cleanStr.slice(1, -1));
}


/*
Method	            Time Complexity	      Space Complexity	            Best Use Case
Two-Pointer	            O(n)	            O(1) auxiliary	      Production code and large strings.
Built-In Methods	    O(n)	            O(n)	              Quick scripts and maximum readability.
Manual Loop	            O(n)	            O(n)	              Coding interviews restricting built-in helpers.
Recursion	            O(n)	            O(n) call stack	      Academic exercises and functional patterns.
*/
