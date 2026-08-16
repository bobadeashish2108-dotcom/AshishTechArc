document.addEventListener('DOMContentLoaded',()=>{
  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
  if(toggle&&nav) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
  const items=document.querySelectorAll('.reveal');
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
  items.forEach(i=>observer.observe(i));
});
function showFormMessage(event){
  event.preventDefault();
  const msg=document.getElementById('form-message');
  msg.textContent='Thanks! This demo form is ready to connect to a real email service.';
  event.target.reset();
  return false;
}
