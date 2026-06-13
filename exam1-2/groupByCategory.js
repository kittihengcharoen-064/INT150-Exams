function groupByCategory(products) {
  // your code here
  if (!products || !Array.isArray(products)) return {}
  return products.reduce((acc, cur) => {
    acc[cur.category] ? acc[cur.category].push(cur.name) : acc[cur.category] = [cur.name]
    return acc
  }, {})
}

module.exports = groupByCategory

// 1. Basic inputF
console.log(
  groupByCategory([
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Pants', category: 'Clothing' },
    { name: 'Apple', category: 'Food' }
  ])
)
// { Clothing: ['Shirt', 'Pants'], Food: ['Apple'] }

// 2. One product
console.log(groupByCategory([{ name: 'Laptop', category: 'Electronics' }]))
// { Electronics: ['Laptop'] }

// 3. Empty array
console.log(groupByCategory([])) // {}

// 4. Null input
console.log(groupByCategory(null)) // {}

// 5. Undefined input
console.log(groupByCategory(undefined)) // {}

// 6. Non-array input
console.log(groupByCategory({ name: 'Invalid' })) // {}
console.log(groupByCategory(42)) // {}
console.log(groupByCategory('text')) // {}
