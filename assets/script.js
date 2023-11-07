const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const bulletPoints = document.querySelectorAll ('.dot');
let currentSlide = 0;

const arrowLeft = document.querySelector ('.arrow_left');
arrowLeft.addEventListener ('click', function() {
	console.log ('arrow left click')

}
);
const arrowRight = document.querySelector ('.arrow_right');
arrowRight.addEventListener ('click', function() {
	console.log ('arrow right click')
}
);

arrowRight.addEventListener('click', function() {
    bulletPoints[currentSlide].classList.remove('dot_selected');
    currentSlide += 1;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    bulletPoints[currentSlide].classList.add('dot_selected');
    const bannerImage = document.querySelector('.banner-img');
	bannerImage.src = './assets/images/slideshow/' + slides[currentSlide].image;
    const tagline = document.querySelector('#banner p');
    tagline.innerHTML = slides[currentSlide].tagLine;
});
arrowLeft.addEventListener('click', function() {
    bulletPoints[currentSlide].classList.remove('dot_selected');
    currentSlide -= 1;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    bulletPoints[currentSlide].classList.add('dot_selected');
    const bannerImage = document.querySelector('.banner-img');
    bannerImage.src = './assets/images/slideshow/' + slides[currentSlide].image;
    const tagline = document.querySelector('#banner p');
    tagline.innerHTML = slides[currentSlide].tagLine;
});