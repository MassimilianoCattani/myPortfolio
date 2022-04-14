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
//---------------------------------------------------------------------------------------------------------------------
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