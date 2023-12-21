const axios = require("axios");

const userId = 1;

const getUser = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await axios.get(url);
  return response.data;
};

const getUserPosts = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const response = await axios.get(url);
  return response.data;
};

const getPostComments = async (postId) => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
  const response = await axios.get(url);
  return response.data;};

(async () => {
  try {
    const user = await getUser(userId);
    console.log("User name: " + user.name);
    console.log("User email: " + user.email);
    const posts = await getUserPosts(userId);
    console.log("Number of user posts: " + posts.length);
    const comments = await Promise.all(
      posts.map((post) => getPostComments(post.id))
    );
    const amountOfComments = comments.reduce((acc, cmt) => acc + cmt.length, 0);
    console.log("Number of comments: " + amountOfComments);
  } catch (error) {
    console.log(error);
  }
})();
