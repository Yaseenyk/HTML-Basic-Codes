const posts = [
  {
    title: "Post 1",
    body: "This is post1"
  },
  {
    title: "Post 2",
    body: "This is post2"
  }
];

function getPosts() {
  const orderedList = document.getElementById("post-list");
  orderedList.innerHTML = "";
  setTimeout(() => {
    posts.forEach((post) => {
      const listElement = document.createElement("li");
      listElement.innerHTML = post.body;
      orderedList.appendChild(listElement);
    });
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

createPost({
  title: "Third post",
  body: "This is third post"
})
  .then((response) => {
    getPosts();
  })
  .catch();
