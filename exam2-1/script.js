function displayPassword() {
  const setup = () => {
    //write your code...
    const tooglePassword = document.getElementById("togglePassword")
    tooglePassword.addEventListener("change", changeDisplayMode)
  }
  const changeDisplayMode = (e) => {
    ////write your code...
    const inputPassword = document.getElementById("password")
    const isChecked = e.currentTarget.checked

    inputPassword.setAttribute("type", isChecked ? "text" : "password")
  }
  return {
    setup,
    changeDisplayMode
  }
}
//run on browser
// const { setup, changeDisplayMode } = displayPassword()
// setup()
//run on node.js
module.exports = displayPassword
