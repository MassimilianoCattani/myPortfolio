const navBackIn = document.querySelector('#ul-main-nav');
const burgy = document.getElementById('hamburger');
const mainNavLinks = document.querySelectorAll('#ul-main-nav li a') 
burgy.addEventListener('click', reaction);
function reaction(){
    navBackIn.classList.toggle('show');
    burgy.classList.toggle('toggle');
    mainNavLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation = `topNavLinkFade 0.5s ease forwards ${index / 3 + 0.3}s`;
        }
    });
}
