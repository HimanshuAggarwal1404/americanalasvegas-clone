let carouselPosition = 0;
var myInterval=null;
window.onload=function(){
    playpause = 1; //stop
    document.getElementById("play").classList.add("nodisplay");
    document.getElementById("pause").classList.remove("nodisplay");
    myInterval = setInterval(() => {
        carouselPosition = carouselPosition == -300 ? 0 : carouselPosition - 100;
        setCarousel();
      }, 4000);
}
window.onscroll = function () {
  scrollFunction();
};
let playpause = 1; //play
function setCarousel() {
  document.getElementById(
    "carousel"
  ).style.transform = `translateX(${carouselPosition}vw)`;
}
document.getElementById("stopPlay").addEventListener("click", () => {
  if (playpause == 0) {
    playpause = 1; //stop
    document.getElementById("play").classList.add("nodisplay");
    document.getElementById("play").classList.remove("flexdisplay");
    document.getElementById("pause").classList.add("flexdisplay");
    document.getElementById("pause").classList.remove("nodisplay");
    myInterval = setInterval(() => {
        carouselPosition = carouselPosition == -300 ? 0 : carouselPosition - 100;
        setCarousel();
      }, 4000);
  } else {
    playpause = 0; //play
    document.getElementById("play").classList.remove("nodisplay");
    document.getElementById("play").classList.add("flexdisplay");
    document.getElementById("pause").classList.remove("flexdisplay");
    document.getElementById("pause").classList.add("nodisplay");
    clearInterval(myInterval);
  }
});

document.getElementById("header").style.height = "15vh";
document.getElementById("logo-img").style.height = "10vh";

function scrollFunction() {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 40) {
    document.getElementById("header").style.height = "10vh";
    document.getElementById("logo-img").style.height = "7vh";
  } else {
    document.getElementById("header").style.height = "15vh";
    document.getElementById("logo-img").style.height = "10vh";
  }
}
document.getElementById("video1").loop = true;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove("hideright");
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".abt");
hiddenElements.forEach((el) => observer.observe(el));

document.getElementById("dot1").addEventListener("click", () => {
  carouselPosition = 0;
  setCarousel();
});
document.getElementById("dot2").addEventListener("click", () => {
  carouselPosition = -100;
  setCarousel();
});
document.getElementById("dot3").addEventListener("click", () => {
  carouselPosition = -200;
  setCarousel();
});
document.getElementById("dot4").addEventListener("click", () => {
  carouselPosition = -300;
  setCarousel();
});
