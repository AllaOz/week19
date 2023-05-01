const postsContainer = document.querySelector('.posts');
function getPosts(post) {
  return `
    <div class="post">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>`;
}

function addPosts(text, container) {
  container.innerHTML += text;
}
 fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(posts => {
     posts.forEach(post => {
       const postsContent = getPosts(post);
       addPosts(postsContent, postsContainer);
     });
   })
   