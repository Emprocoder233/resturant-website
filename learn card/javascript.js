const buger = document.querySelector('.buger');
const nav = document.querySelector('.nav');
const topp = document.querySelector('.toppage');
const tag = document.querySelector('.about');
const tagg = document.querySelector('.colo');

buger.addEventListener('click', ()=>{
   nav.classList.toggle('active');
   //console.log(buger)

   buger.classList.toggle('toggle')
   console.log(tagg)

   tagg.classList.toggle('navy')
});

window.addEventListener('scroll', ()=>{

  // topp.classList.toggle('tiv', window.scrollY > 100);
  if(window.scrollY > 100){
    topp.classList.add('tiv')
  }else{
    topp.classList.remove('tiv')
  }
});



