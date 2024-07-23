document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');

    // Asegúrate de que el loading screen se muestre durante al menos 1 segundo
    const minLoadingTime = 1000;
    const startTime = Date.now();

    window.addEventListener('load', function() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = minLoadingTime - elapsedTime;

        if (remainingTime > 0) {
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, remainingTime);
        } else {
            loadingScreen.style.display = 'none';
        }
    });
});


window.onscroll = function(){
	if(document.documentElement.scrollTop > 100){
		document.querySelector(".go-top-container")
		.classList.add('show');

	}else{
		document.querySelector(".go-contact-container")
		.classList.add('show-contact');
		document.querySelector(".go-top-container")
		.classList.remove('show');
	}
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue + "+";
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const slides = document.querySelectorAll(".comentario");
slides.forEach((comentario, i) => {
  comentario.style.transform = `translateX(${i*100}%)`;
});

/*let cumSlide = 0;
const nextSlide = document.querySelector(".siguiente");

nextSlide.addEventListener("click", function(){
  cumSlide ++;
  slides.forEach((comentario, i) => {
    slide.style.transform = `translateX(${100*(i-cumSlide)}%)`;
  });
})*/

let cumSlide = 0;
const nextSlide = document.querySelector(".siguiente");
let maxSlide = slides.lenght - 1;

console.log(maxSlide);

nextSlide.addEventListener("click", function () {
  if (cumSlide === 3) {
    cumSlide = 0;
  } else {
    cumSlide++;
  }
  slides.forEach((comentario, i) => {
    comentario.style.transform = `translateX(${100*(i-cumSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".anterior");
prevSlide.addEventListener("click", function(){
  if (cumSlide === 0) {
    cumSlide = 3;
  } else {
    cumSlide--;
  }
  slides.forEach((comentario, i) => {
    comentario.style.transform = `translateX(${100*(i-cumSlide)}%)`;
  });
});

//COUNTING
