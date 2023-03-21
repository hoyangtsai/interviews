const div1 = document.querySelector('.div-1');
const div2 = document.querySelector('.div-2');
const div3 = document.querySelector('.div-3');

div1.addEventListener('click', (e) => {
  // console.log('div-1');
  console.log(e.currentTarget.className);
}, false);

// use capture
div2.addEventListener('click', (e) => {
  // console.log('div-2');
  // console.log(e.target); // div-3
  console.log(e.currentTarget.className);
}, true);

div3.addEventListener('click', (e) => {
  // console.log('div-3');
  console.log(e.currentTarget.className);
}, false);