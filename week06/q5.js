function wordFrequency(str) {
    let words = str.toLowerCase().split(" ");
    let result = {}
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (result[word]) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }
    return result
}

console.log(wordFrequency("Tea tea Time"));
// Expected Output: { tea: 2, time: 1 }
