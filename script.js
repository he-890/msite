
const burger=document.querySelector('.burger');
const nav=document.querySelector('nav ul');
burger.addEventListener('click',()=>nav.classList.toggle('active'));

function reveal(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const rect=el.getBoundingClientRect();
    if(rect.top<window.innerHeight-60) el.classList.add('show');
  });
}
window.addEventListener('scroll',reveal);
window.addEventListener('load',reveal);
