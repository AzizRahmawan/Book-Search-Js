const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
    const navLinks =document.querySelectorAll('nav a');
    burger.addEventListener("click", () =>{
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    })
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLists.classList.remove("nav-active");
            burger.classList.remove("toggle-burger");
        })
    })
}
navSlide();