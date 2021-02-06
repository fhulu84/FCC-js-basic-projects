const slides = document.querySelectorAll('.slide');
const nextBtn  = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// you can do this by css but you need to add css for each slide you add
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function(){
  counter++;
  carousel();
})

prevBtn.addEventListener('click', function(){
  counter--;
  carousel();
})

function carousel(){
  // working with slides
  // if(counter === slides.length) counter = 0;
  // else if(counter < 0) counter = slides.length - 1;

  // working with buttons
  if(counter < slides.length - 1){
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if(counter > 0){
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  })
}

// hide on window load
prevBtn.style.display = "none";


