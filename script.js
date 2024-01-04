const hamburger=document.querySelector(".hamburger");
const links=document.querySelector(".links");
hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    links.classList.toggle("active");

})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


 