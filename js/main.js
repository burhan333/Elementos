// SLIDER

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let auto = true;
const intervalTime = 4000;
let slideInterval;

function nextSlide()
{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling)
    {
        current.nextElementSibling.classList.add('current');
    }
    else
    {
        slides[0].classList.add('current');
    }
}

function prevSlide()
{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling)
    {
        current.previousElementSibling.classList.add('current');
    }
    else
    {
        slides[slides.length - 1].classList.add('current');
    }
}

next.addEventListener('click', function() {
    nextSlide();
    if(auto)
    {
        clearInterval(slideInterval); // clear interval when we click button
        slideInterval =  setInterval(nextSlide, intervalTime);       
    }
});

prev.addEventListener('click', function() {
    prevSlide();
    if(auto)
    {
        clearInterval(slideInterval); // clear interval when we click button
        slideInterval =  setInterval(nextSlide, intervalTime); 
    }
});
// AUTO SLIDER IF TRUE
if (auto)
{
    // set interval time for next slide and give it to 
    slideInterval =  setInterval(nextSlide, intervalTime);
}