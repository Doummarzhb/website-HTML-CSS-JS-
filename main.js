let menu =document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
}

var swiper=new swiper(".review-content", {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:true,
    },
    pagination: {
        e1:".swiper-pagination",
        clickable:true,
    },
})