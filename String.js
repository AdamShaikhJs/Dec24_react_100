// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"

// 2. Check for Palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true

// 3. Count Vowels and Consonants
function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelsCount = 0, consonantsCount = 0;
    for (const char of str) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) vowelsCount++;
            else consonantsCount++;
        }
    }
    return { vowels: vowelsCount, consonants: consonantsCount };
}
console.log(countVowelsAndConsonants("hello")); // Output: { vowels: 2, consonants: 3 }

// 4. Remove Duplicates
function removeDuplicates(str) {
    return Array.from(new Set(str)).join('');
}
console.log(removeDuplicates("banana")); // Output: "ban"


// 5. Find the First Non-Repeating Character
function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return str[i];
    }
    return null;
}
console.log(firstNonRepeatingChar("swiss")); // Output: "w"


// 6. Count Occurrences of Each Character
function countCharacterOccurrences(str) {
    const count = {};
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}
console.log(countCharacterOccurrences("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }


// 7. Check if Two Strings are Anagrams
function areAnagrams(str1, str2) {
    const format = str => str.split('').sort().join('');
    return format(str1) === format(str2);
}
console.log(areAnagrams("listen", "silent")); // Output: true


// 8. Find the Longest Word in a Sentence
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
console.log(findLongestWord("I love programming")); // Output: "programming"

// 9. Convert String to Uppercase/Lowercase
function toUpperCase(str) {
    return str.toUpperCase();
}
function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toUpperCase("hello")); // Output: "HELLO"
console.log(toLowerCase("HELLO")); // Output: "hello"

// 10. Replace Spaces with a Character
function replaceSpaces(str, char) {
    return str.split(' ').join(char);
}
console.log(replaceSpaces("hello world", "-")); // Output: "hello-world"

// 11. Find All Substrings of a String
function findAllSubstrings(str) {
    const substrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }
    return substrings;
}
console.log(findAllSubstrings("abc")); // Output: ["a", "ab", "abc", "b", "bc", "c"]

// 12. Check if a String Contains Only Digits
function isNumeric(str) {
    return /^\d+$/.test(str);
}
console.log(isNumeric("12345")); // Output: true
