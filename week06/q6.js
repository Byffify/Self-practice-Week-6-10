function groupByCategory(arr) {
    const result = {};
    for (let product of arr) {
        if (!result[product.category]) {
            result[product.category] = [];
        }
    result[product.category].push(product.name);
    }    
    return result
}

console.log(groupByCategory([
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Apple", category: "Food" }
]));
// Expected Output:
// { Clothing: ["Shirt", "Pants"], Food: ["Apple"] }
