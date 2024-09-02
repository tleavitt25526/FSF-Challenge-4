const blogContainer = document.querySelector('#blog-container');
const backButton = document.querySelector('#back');

backButton.addEventListener('click', function() {
    window.location.href = './index.html';
});

function renderPosts() {
    const posts = JSON.parse(localStorage.getItem('posts'));

    posts.forEach(element => {
        console.log(element);

        const post = document.createElement('section');
        const title = document.createElement('h3');
        const line = document.createElement('hr');
        const content = document.createElement('p');
        const author = document.createElement('p');

        post.classList.add('blog')
        title.textContent = element.title;
        content.textContent = element.content;
        author.textContent = 'Posted by: ' + element.author;
        author.classList.add('fade');

        blogContainer.appendChild(post);
        post.appendChild(title);
        post.appendChild(line);
        post.appendChild(content);
        post.appendChild(author);
    });
}

function init() {
    renderPosts();
}
init();