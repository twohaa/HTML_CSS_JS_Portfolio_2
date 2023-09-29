const blogIcon = document.getElementById("blog-icon");
const menu = document.getElementById("menu");


blogIcon.addEventListener("click", () => {
    if(menu.className === 'hidden')
    {
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden");
    }
});