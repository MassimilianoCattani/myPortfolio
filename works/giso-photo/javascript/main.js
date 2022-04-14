//mobile navbar

function navSlide(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.topnav');
    const topNavLinks = document.querySelectorAll('.topnav a');
//toggle nav
    burger.addEventListener('click', function(){
        nav.classList.toggle('topnav-active');

        //animate links
        topNavLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `topNavLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
            
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

    
}
navSlide();
//------------------------------------------------------------------------------------
//Performance
//load image only when close to the screen view.

const imgInterseptObj = document.querySelectorAll('[data-src]');
function preloadImage(img){
    const src = img.getAttribute('data-src');
    if(!src){
        return;
    }
    img.src = src;
}
const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 300px 0px'
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
           preloadImage(entry.target);
           imgObserver.unobserve(entry.target); 
        }
    });
}, imgOptions);
imgInterseptObj.forEach(pic => {
    imgObserver.observe(pic);
});
//----------------------------------------------------------------------------------------------------------------
//carousel
var indexL = 0;
var indexM = 0;
var indexR = 0;

function carouselLeft(){
    const leftCol = document.querySelectorAll('.left');
    for(let i = 0; i < leftCol.length; i++){
        leftCol[i].style.display = 'none';
    }
    indexL = Math.floor(Math.random()*leftCol.length);
    leftCol[indexL].style.display = 'block';
    setTimeout(carouselLeft, 5000);
}
function carouselMiddle(){
    const midCol = document.querySelectorAll('.middle');
    for(let i = 0; i < midCol.length; i++){
        midCol[i].style.display = 'none';
    }
    indexM = Math.floor(Math.random()*midCol.length);
    midCol[indexM].style.display = 'block';
    setTimeout(carouselMiddle, 6000);
}
function carouselRight(){
    const rightCol = document.querySelectorAll('.right');
    for(let i = 0; i < rightCol.length; i++){
        rightCol[i].style.display = 'none';
    }
    indexR = Math.floor(Math.random()*rightCol.length);
    rightCol[indexR].style.display = 'block';
    setTimeout(carouselRight, 7000);
}
carouselLeft();
carouselMiddle();
carouselRight()



    
    




      
      
 
    
  
