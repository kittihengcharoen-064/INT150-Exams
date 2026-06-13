[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/fadwacCA)
# Function Name: groupByCategory(products)

## Description:

Write a function accepts an array of product objects.
Groups them into an object using category as the key and product names as values. If input is invalid (not an array, empty array, undefined, null), return an empty object.

### Example:

```
// 1. Basic Valid input
groupByCategory([
{ name: 'Shirt', category: 'Clothing' },
{ name: 'Pants', category: 'Clothing' },
{ name: 'Apple', category: 'Food' }
])
// { Clothing: ['Shirt', 'Pants'], Food: ['Apple'] }

// 2. One product
groupByCategory([{ name: 'Laptop', category: 'Electronics' }])
// { Electronics: ['Laptop'] }

// 3. Empty array
groupByCategory([]) // {}

// 4. Null input
groupByCategory(null) // {}

// 5. Undefined input
groupByCategory(undefined) // {}

// 6. Non-array input
groupByCategory({ name: 'Invalid' }) // {}
groupByCategory(42) // {}
groupByCategory('text') // {}

```
