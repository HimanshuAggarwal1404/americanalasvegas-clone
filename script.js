let carouselPosition = 0;
let reviewcarouselpos=0;
var myInterval=null;
window.onload=function(){
    playpause = 1; //stop
    document.getElementById("play").classList.add("nodisplay");
    document.getElementById("pause").classList.remove("nodisplay");
    myInterval = setInterval(() => {
        carouselPosition = carouselPosition == -300 ? 0 : carouselPosition - 100;
        setCarousel();
      }, 4000);
      otherInterval = setInterval(() => {
      reviewcarouselpos = reviewcarouselpos == -400 ? 0 : reviewcarouselpos - 100;
      setreviewCarousel();
      }, 10000);
}
window.onscroll = function () {
  scrollFunction();
};
let playpause = 1;
document.getElementById("dot1").style.backgroundColor="white";
function setCarousel() {
  if(carouselPosition==0){
    document.getElementById("dot1").style.backgroundColor="white";
    document.getElementById("dot2").style.backgroundColor="";
    document.getElementById("dot3").style.backgroundColor="";
    document.getElementById("dot4").style.backgroundColor="";
  }
  else if(carouselPosition==-100){
    document.getElementById("dot2").style.backgroundColor="white";
    document.getElementById("dot1").style.backgroundColor="";
    document.getElementById("dot3").style.backgroundColor="";
    document.getElementById("dot4").style.backgroundColor="";
  }
  else if(carouselPosition==-200){
    document.getElementById("dot3").style.backgroundColor="white";
    document.getElementById("dot2").style.backgroundColor="";
    document.getElementById("dot1").style.backgroundColor="";
    document.getElementById("dot4").style.backgroundColor="";
  }
  else if(carouselPosition==-300){
    document.getElementById("dot4").style.backgroundColor="white";
    document.getElementById("dot2").style.backgroundColor="";
    document.getElementById("dot3").style.backgroundColor="";
    document.getElementById("dot1").style.backgroundColor="";
  }
  document.getElementById(
    "carousel"
  ).style.transform = `translateX(${carouselPosition}vw)`;
}
function setreviewCarousel(){
  if(reviewcarouselpos==0){
    document.getElementById("reviews-controlbar-dot1").style.backgroundColor="#a31521";
    document.getElementById("reviews-controlbar-dot2").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot3").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot4").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot5").style.backgroundColor="";
  }
  else if(reviewcarouselpos==-100){
    document.getElementById("reviews-controlbar-dot2").style.backgroundColor="#a31521";
    document.getElementById("reviews-controlbar-dot1").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot3").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot4").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot5").style.backgroundColor="";
  }
  else if(reviewcarouselpos==-200){
    document.getElementById("reviews-controlbar-dot3").style.backgroundColor="#a31521";
    document.getElementById("reviews-controlbar-dot1").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot2").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot4").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot5").style.backgroundColor="";
  }
  else if(reviewcarouselpos==-300){
    document.getElementById("reviews-controlbar-dot4").style.backgroundColor="#a31521";
    document.getElementById("reviews-controlbar-dot1").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot3").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot2").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot5").style.backgroundColor="";
  }
  else if(reviewcarouselpos==-400){
    document.getElementById("reviews-controlbar-dot5").style.backgroundColor="#a31521";
    document.getElementById("reviews-controlbar-dot1").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot3").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot2").style.backgroundColor="";
    document.getElementById("reviews-controlbar-dot4").style.backgroundColor="";
  }

  document.getElementById(
    "recarousel"
  ).style.transform = `translateX(${reviewcarouselpos}vw)`;
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
document.getElementById("reviews-controlbar-dot1").addEventListener("click", () => {
  reviewcarouselpos = 0;
  setreviewCarousel();
});
document.getElementById("reviews-controlbar-dot2").addEventListener("click", () => {
  reviewcarouselpos = -100;
  setreviewCarousel();
});
document.getElementById("reviews-controlbar-dot3").addEventListener("click", () => {
  reviewcarouselpos = -200;
  setreviewCarousel();
});
document.getElementById("reviews-controlbar-dot4").addEventListener("click", () => {
  reviewcarouselpos = -300;
  setreviewCarousel();
});
document.getElementById("reviews-controlbar-dot5").addEventListener("click", () => {
  reviewcarouselpos = -400;
  setreviewCarousel();
});
