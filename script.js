const carPic = document.querySelectorAll(".pic")
const rightSlide = document.querySelector(".right")
const leftSlide = document.querySelector(".left")
const auto = true;
const interValTime = 5000;
let slideInterval;

rightSlide.addEventListener("click", (e) => {
    nextSlide()
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, interValTime)
})


leftSlide.addEventListener("click",(e) => {
    previousSlide()
    if(auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, interValTime)
    }
})

function nextSlide(){
    // Get active class
    const active = document.querySelector(".active")

    // remove active class
    active.classList.remove("active")

    // check for next slide
    if(active.nextElementSibling) {
        // Add active to next sibling
        active.nextElementSibling.classList.add("active")
    } else {
        carPic[0].classList.add("active")
    }
    setTimeout(() => active.classList.remove("active"))
}

function previousSlide(){
    const active = document.querySelector(".active")

    active.classList.remove("active")

    if(active.previousElementSibling) {
        active.previousElementSibling.classList.add("active")
    } else {
        carPic[carPic.length - 1].classList.add("active")
    }
}

// Auto slide
if(auto) {
    // run next slide at interval
    slideInterval = setInterval(nextSlide, interValTime)
}