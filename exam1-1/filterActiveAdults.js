function filterActiveAdults(users) {
  // your code her
  if (!Array.isArray(users)) return []
  return users.filter((user) => user?.active && Number.isInteger(user.age) && user.age >= 18)
}

module.exports = filterActiveAdults
console.log(filterActiveAdults(undefined))
// => []
console.log(filterActiveAdults(null))
// => []
console.log(filterActiveAdults([]))
// => []
console.log(filterActiveAdults(101))
// => []

console.log(
  filterActiveAdults([
    { name: 'Alice', age: 22, active: true },
    { name: 'Bob', age: 17, active: true },
    { name: 'Charlie', age: 30, active: false },
    { name: 'Daisy', age: 25, active: true }
  ])
)
// => [{ name: "Alice", age: 22, active: true }, { name: "Daisy", age: 25, active: true }]

console.log(
  filterActiveAdults([
    { name: 'Eve', age: '22', active: true }, // age not number
    { name: 'Fred', age: 19 }, // missing active
    { name: 'Gina', age: 20, active: true }
  ])
)
// => [{ name: "Gina", age: 20, active: true }]
console.log(
  filterActiveAdults([
    { name: 'Fred', age: 19 }, // missing active
    { name: 'Gina', age: 10, active: true }
  ])
)
// => []
