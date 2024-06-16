const themeButton = document.querySelector('#theme');
const body = document.body;
let mode = 'dark';

themeButton.addEventListener('click', function() {
    console.log("clicked");

    if (mode == 'dark') mode = 'light';
    else mode = 'dark';

    console.log(mode);
    load();
});

function load() {
    body.setAttribute('class', mode);
    if (mode == 'dark') themeButton.textContent = '🌕';
    else themeButton.textContent = '🌑';
}

function init() {
    load();
}
init();