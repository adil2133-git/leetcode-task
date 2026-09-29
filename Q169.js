var findTheDifference = function(s, t) {
    let freq = {};

    // Count characters in s
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (freq[ch]) {
            freq[ch]++;
        } else {
            freq[ch] = 1;
        }
    }

    // Check characters in t
    for (let i = 0; i < t.length; i++) {
        let ch = t[i];

        if (!freq[ch]) {
            return ch;
        } else {
            freq[ch]--;
        }
    }
};

console.log(findTheDifference("abcd", "abcde")); // e
console.log(findTheDifference("", "y")); // y
console.log(findTheDifference("ae", "aea")); // a
console.log(findTheDifference("abcd", "badce")); // e