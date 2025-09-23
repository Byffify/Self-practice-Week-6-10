function unique(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(unique([1, 2, 2, 3, 4, 4, 5]));
// Expected Output: [1, 2, 3, 4, 5]
