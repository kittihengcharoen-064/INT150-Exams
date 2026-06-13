async function fetchUsers() {
  //code here...
  const userListEl = document.getElementById("userList")
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    const isValidData = Array.isArray(data) && data.length > 0

    if (isValidData) {
      const nameList = data.map((item) => createList(item.name))
      userListEl.replaceChildren(...nameList)
    }

    function createList(value) {
      const li = document.createElement("li")
      li.textContent = value
      return li
    }
  } catch (error) {
    console.error('Fetch error:', error)
  }
}
//when test on browser
// fetchUsers()

//when test on node.js
module.exports = fetchUsers
