const submitButton = document.querySelector('#submit');
const titleText = document.querySelector('#title');
const contentText = document.querySelector('#content');
const authorText = document.querySelector('#author');

submitButton.addEventListener('click', function() {
    if (titleText.value != "" && contentText.value != "" && authorText.value != "") {
        let posts = JSON.parse(localStorage.getItem("posts") || "[]"); // get posts from storage or make an empty array

        const blogPost = {
            title: titleText.value,
            content: contentText.value,
            author: authorText.value,
        };
        posts.push(blogPost);
    
        localStorage.setItem('posts', JSON.stringify(posts));
        console.log(localStorage.getItem('posts'));

        window.location.assign("file:///C:/Users/origi/bootcamp/FSF-Challenge-4/blog.html");
    }
    else {
        alert("Please fill out all text boxes!");
    }
});