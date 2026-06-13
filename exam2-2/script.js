function charCounter() {
  function setup() {
    //write your code...
    const messageBox = document.getElementById("messageBox")
    messageBox.addEventListener("input", charCounting)
  }
  function charCounting(e) {
    //write your code...
    const charCount = document.getElementById("charCount")
    const value = e.currentTarget.value
    const length = value.length

    charCount.textContent = length

    if (length > 100) {
      charCount.style.color = "red"
    } else {
      charCount.style.color = "black"
    }
  }
  return { setup, charCounting }
}
//run on browser
// const { setup, charCounting } = charCounter()
// setup()

// run on node.js
module.exports = charCounter
