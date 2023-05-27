/**
 * Scroll to top
 */
let scrollToTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
    if(window.scrollY > 200){
        scrollToTop.classList.add("active");
    }else{
        scrollToTop.classList.remove("active");
    }
})
