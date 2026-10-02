var minSteps = function (s, t) {
    let freqs = {}
    let freqt = {}

    let count = 0
    for (let i = 0; i < s.length; i++) {
        let ch = s[i]

        if (freqs[ch]) {
            freqs[ch]++
        } else {
            freqs[ch] = 1
        }

        let chr = t[i]

        if (freqt[chr]) {
            freqt[chr]++
        } else {
            freqt[chr] = 1
        }
    }

    for (let key in freqs) {
        let diff;
        if (freqt[key] === undefined) {
            diff = freqs[key] - 0
        } else {
            diff = freqs[key] - freqt[key]
        }

        if (diff > 0) {
            count += diff
        }
    }
    return count
};

console.log(minSteps("bab", "aba"))
console.log(minSteps("leetcode", "practice"))
console.log(minSteps("anagram", "mangaar"))