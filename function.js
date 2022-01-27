window.addEventListener('scroll',() => {
  console.log('Hello');
});



const progress_bars = document.
querySelector('.progress')

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight}
    document.documentElement;

    const topElementToTopViewport =
    progress_bars.getBoundingClientRect();

    if(scrollTop > (scrollTop + topElementToTopViewport).tofixed() - clientHeight + 0.50) {
      progress_bars.classList.add('active')
    }
})