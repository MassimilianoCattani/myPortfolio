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
//disable right click of the mouse.

document.addEventListener('contextmenu', function(disable){
    disable.preventDefault();
});
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

//---------------------------------------------------------------------------------------------------------------------
//gallery lightbox
const body = document.querySelector('body');
const header = document.querySelector('header');
const holder = document.querySelector('#coat');
const bottom = document.querySelector('#img-footer')
const images = document.querySelectorAll('.intro-gallery-img');
const box = document.querySelector('#lightbox');
const wideImg = document.querySelector('#expanded-img');
const left = document.getElementById('arrow-left');
const right = document.getElementById('arrow-right');
const remove = document.getElementById('close-btn');

for(let i = 0; i < images.length; i++){

    //open
    images[i].addEventListener('click', function(e){
        wideImg.src = images[i].src;
        box.style.display = 'inline';
        holder.style.display = 'none';
        header.style.display = 'none';
        bottom.style.display = 'none';
        body.style.backgroundColor = '#000';
        //remove        
        remove.addEventListener('click', function(){
            wideImg.src = '';
            box.style.display = 'none';
            holder.style.display = 'flex';
            header.style.display = 'inline-block';
            bottom.style.display = 'flex';
            body.style.backgroundColor = '#fff';
           // location.reload();
        });

        //move right   
        right.addEventListener('click', function(e){
            i++;
            if(i > images.length-1 ){
                i = 0;
                wideImg.src = images[i].src;
            }else{
                wideImg.src = images[i].src;
            }
            wideImg.style.opacity = "0.8";
            setTimeout(function(){
                wideImg.style.opacity = "1";
            },150);  
            e.preventDefault();
        });
        //move left
        left.addEventListener('click', function(e){
            i--; 
            if(i < 0){
                i = images.length-1;
                wideImg.src = images[i].src;    
            }else{
                wideImg.src = images[i].src;
            }
            wideImg.style.opacity = "0.8";
            setTimeout(function(){
                wideImg.style.opacity = "1";
            },150);
            e.preventDefault();   
        });
        e.preventDefault();
    });//end images event listener
}//end for


console.log(window.outerWidth)









/*
watermark(['../media/asian-wedding/IMG-3077.jpeg.jpeg', '/img/logo.png'])
    .image(watermark.image.lowerRight(0.5)) // Or lowerRight() for no opacity
    .then(function (img) {
        document.getElementById('alpha-image').appendChild(img);
    });
*/
/*
$('img').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
}
*/ 