const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let position = 0;

const cardWidth = 300;



function nextSlide() {
        const maxScroll = -(slider.scrollWidth - 920);

    position -= cardWidth;

    if (position < maxScroll) {
        position = maxScroll;
    }

    slider.style.transform = `translateX(${position}px)`;


}




function prevSlide() {

    position += cardWidth;

    if (position > 0) {
        position = 0;
    }


    slider.style.transform = `translateX(${position}px)`;

}

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);