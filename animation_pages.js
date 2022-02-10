window.onload = () => {
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);
}

let diploma_btn = document.querySelectorAll('.diploma_block');

    window.addEventListener('load', () => {

        TweenMax.staggerFrom(diploma_btn, 2, {scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut}, 0.2)
    })

        /*ESSAI D'APPARITION AU SCROLL 3400
    let diploma_btn = document.querySelectorAll('.diploma_block');

    window.addEventListener('scroll',() =>{
        if(window.scrollY>3400) {
            TweenMax.staggerFrom(diploma_btn, 2, {scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut}, 0.2)}
    });*/

const xp_pic = document.querySelector('.experience_pic');

window.addEventListener('scroll',() =>{
    if(window.scrollY>1400) {
        xp_pic.classList.add('slide-right')
    }
});

const formation_pic = document.getSelector('.formation_pic');

window.addEventListener('scroll',() =>{
    if(window.scrollY>1400) {
        formation_pic.classList.add('slide-top')
    }
});

const skills_pic = document.querySelector('.skills_pic');

window.addEventListener('scroll',() =>{
    if(window.scrollY>1400) {
        skills_pic.classList.add('slide-left')
    }
});
    

console.log ('hello');

