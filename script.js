const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;


for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove('active')
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }
    })
}

const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("img");

lightbox.addEventListener("click", function() {
    if (event.target != lightboxImage) {
        lightbox.classList.remove("show")
        lightbox.classList.add("hide")
    }
})

closeLightbox.addEventListener("click", function() {
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})

const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function(element) {
    element.querySelector(".fa-plus").addEventListener("click", function() {
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboxImage.src = element.querySelector("img").getAttribute("src")
    })
})

// testimonial slider
const sliderContainer = document.querySelector(".testi-slider");
const slides = sliderContainer.children;
const containerWidth = sliderContainer.offsetWidth;
const margin = 30;
let itemPerSlide = 0;

// responsive
const responsive = [{
        breakPoint: {
            width: 0,
            item: 1
        }
    },
    {
        breakPoint: {
            width: 991,
            item: 2
        }
    }
]

function load() {

    for (let i = 0; i < responsive.length; i++) {
        if (window.innerWidth > responsive[i].breakPoint.width) {
            itemPerSlide = responsive[i].breakPoint.item;
        }
    }

    start();
}

function start() {
    totalWidth = 0;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.width = (containerWidth / itemPerSlide) - margin + "px";
        slides[i].style.margin = margin / 2 + "px";

    }
    sliderContainer.style.width = totalWidth + "px";

    const slideDots = Math.ceil(slides.length / itemPerSlide);
    console.log(slideDots);

    for (Let i = 0; i < slideDots; i++) {
        const div = document.createElement("div");
        div.id = i;
        div.setAttribute("onclick", "controlSlide(this)");
        if (i == 0) {
            div.classList.add("active");
        }
        document.querySelector(".slide-controls").appendChild(div);
    }
}


function controlSlide(element) {
    changeSide()
}


let timer = setInterval(autoPlay, 5000);
window.onload = load();


// Hedaer fixed

window.onscroll = function {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed")
        } else {
            document.querySelector("header").classList.remove("fixed")
        }
    }
}