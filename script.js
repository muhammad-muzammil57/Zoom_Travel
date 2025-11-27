const header = document.getElementById("header");
window.addEventListener("scroll", () =>{
    header.classList.toggle("sticky", window.scrollY > 0);
});


const toggleMenu = document.getElementById("toggleMenu");
toggleMenu.addEventListener("click", () => {
    const headerNav = document.getElementById("headerNav");
    headerNav.classList.toggle("active");
})