const submitButton = document.querySelector('#submit');
const titleText = document.querySelector('#title');
const contentText = document.querySelector('#content');
const authorText = document.querySelector('#author');

submitButton.addEventListener('click', function () {
    console.log("submitButton clicked");

    const blogPost = {
        title: titleText.value,
        content: contentText.value,
        author: authorText.value,
    };

    localStorage.setItem('blogPost', JSON.stringify(blogPost));
    console.log(localStorage.blogPost);
});