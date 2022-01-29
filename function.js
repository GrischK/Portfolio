/*
window.addEventListener('scroll',() => {
  console.log('Hello');
});
*/

const nav = document.querySelector('.progress');

window.onload = () => {
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
      transition_el.classList.remove('.is-active');
  }, 500);
}

window.addEventListener('scroll',() =>{
  if(window.scrollY>1400) {
      nav.classList.add('scroll')
  }
});

const nav1 = document.querySelector('.progress1');

window.addEventListener('scroll',() =>{
  if(window.scrollY>1430) {
      nav1.classList.add('scroll1')
  }
});

const nav2 = document.querySelector('.progress2');

window.addEventListener('scroll',() =>{
  if(window.scrollY>1460) {
      nav2.classList.add('scroll2')
  }
});

const nav3 = document.querySelector('.progress3');

window.addEventListener('scroll',() =>{
  if(window.scrollY>1490) {
      nav3.classList.add('scroll3')
  }
});

const nav4 = document.querySelector('.progress4');

window.addEventListener('scroll',() =>{
  if(window.scrollY>1520) {
      nav4.classList.add('scroll4')
  }
});

const nav5 = document.querySelector('.progress5');

window.addEventListener('scroll',() =>{
  if(window.scrollY>1550) {
      nav5.classList.add('scroll5')
  }
});

const nav6 = document.querySelector('.progress6');

window.addEventListener('scroll',() =>{
  if(window.scrollY>1580) {
      nav6.classList.add('scroll6')
  }
});

const nav7 = document.querySelector('.progress7');

window.addEventListener('scroll',() =>{
  if(window.scrollY>1610) {
      nav7.classList.add('scroll7')
  }
});