const scrollBtn = document.querySelector("#scroll-to-top");


window.addEventListener("scroll", (e) => {
    if (window.scrollY > 150) {
        scrollBtn.classList.remove("hidden");
    } else {
        scrollBtn.classList.add("hidden");
    }
});