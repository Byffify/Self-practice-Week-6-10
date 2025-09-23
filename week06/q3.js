function countVowels(str) {
    let words = str.toLowerCase().split("")
    let countVowel = 0;
    for (let i = 0; i <= words.length - 1; i++) {
        if (words[i] == "a" || words[i] == "e" || words[i] == "i" || words[i] == "o" || words[i] == "u") {
            countVowel++
        }
    }
    return countVowel
}

console.log(countVowels("JavaScript"));
// Expected Output: 3
