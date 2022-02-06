let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`; 
}


let totalSlidesFixo = document.querySelectorAll('.sliderfixo--item').length;
let currentSlideFixo = 0;
let sliderWidthFixo = document.querySelector('.sliderfixo').clientWidth;

document.querySelector('.sliderfixo--width').style.width = `${sliderWidthFixo * totalSlidesFixo}px`;
document.querySelector('.sliderfixo--controls').style.width = `${sliderWidthFixo}px`;
document.querySelector('.sliderfixo--controls').style.height = `${document.querySelector('.sliderfixo').clientHeight}px`;

function goPrevFixo() {
    currentSlideFixo--;
    if(currentSlideFixo < 0) {
        currentSlideFixo = totalSlidesFixo - 1;
    }
    updateMarginFixo();
}
function goNextFixo() {
    currentSlideFixo++;
    if(currentSlideFixo > (totalSlidesFixo-1)) {
        currentSlideFixo = 0;
    }
    updateMarginFixo();
}

function updateMarginFixo() {
    let sliderItemWidthFixo = document.querySelector('.sliderfixo--item').clientWidth;
    let newMarginFixo = (currentSlideFixo * sliderItemWidthFixo);
    document.querySelector('.sliderfixo--width').style.marginLeft = `-${newMarginFixo}px`; 
}

setInterval(goNext, 5000);
setInterval(goNextFixo, 5000);