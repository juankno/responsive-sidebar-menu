var btn = document.querySelector("#btn");
var sidebar = document.querySelector(".sidebar");
var searchBtn = document.querySelector(".bx-search");


btn.onclick = function() {
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}