window.onload = () => {
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 100);
}

let diploma_btn = document.querySelectorAll('.diploma_block');

    window.addEventListener('load', () => {

        TweenMax.staggerFrom(diploma_btn, 2, {scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut}, 0.2)
    })

    /* ESSAI D'APPARITION AU SCROLL 3400
    let diploma_btn = document.querySelectorAll('.diploma_block');

    window.addEventListener('scroll',() =>{
        if(window.scrollY>3400) {
        TweenMax.staggerFrom(diploma_btn, 2, {scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut}, 0.2)}
    });
    */

console.log ('hello');

