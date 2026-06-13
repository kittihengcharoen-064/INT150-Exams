async function getUser() {
  //code here...
  const showUser = document.getElementById("showUser");

  const postData = await getPostData();
  const userId = postData?.userId;
  const userInfo = await getUserInfo(userId);

  if (userId) {
    showUser.textContent = userInfo.name;
  }

  async function fetcher(url) {
    let data = null;
    try {
      const response = await fetch(url);
      data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getPostData() {
    const postData = await fetcher(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return postData;
  }

  async function getUserInfo(userId) {
    const userData = await fetcher(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return userData;
  }
}
function init() {
  document.getElementById("loadUser").addEventListener("click", getUser);
}
//when test on browser
// init()
//when test on node.js
module.exports = { init };
