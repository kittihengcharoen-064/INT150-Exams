[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/yM6M0RZw)
# Function Name: filterActiveAdults(users)

## Description:

Write a function that takes an array of user objects with fields: { name, age, active } and returns a new array of users who are active and at least 18 years old. If the input is not a valid array, return an empty array.

### Example:

```
// 1. Invalid user inputs
filterActiveAdults(undefined) // => []
filterActiveAdults(null) // => []
filterActiveAdults([]) // => []
filterActiveAdults(101) //=>[]

// 2. Valid user input
filterActiveAdults([
  { name: 'John', age: 20, active: true },
  { name: 'Jane', age: 17, active: true },
  { name: 'Bob', age: 25, active: false }
])
// => [ { name: 'John', age: 20, active: true } ]

filterActiveAdults([
{ name: "Alice", age: 22, active: true },
{ name: "Bob", age: 17, active: true },
{ name: "Charlie", age: 30, active: false },
{ name: "Daisy", age: 25, active: true }
])
// => [{ name: "Alice", age: 22, active: true }, { name: "Daisy", age: 25, active: true }]

//3.Invalid value or missing value
filterActiveAdults([
{ name: "Eve", age: "22", active: true }, // age not number
{ name: "Fred", age: 19 }, // missing active
{ name: "Gina", age: 20, active: true }
])
// => [{ name: "Gina", age: 20, active: true }]

filterActiveAdults([
{ name: "Fred", age: 19 }, // missing active
{ name: "Gina", age: 10, active: true }
])
// => []

```
