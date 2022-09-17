
const counter = document.getElementById('counter');
const markAll = document.getElementById('mark-all');
const bullets = document.querySelectorAll('.bullet');
const notif1 = document.querySelector('.notif1')
const notif2 = document.querySelector('.notif2')
const notif3 = document.querySelector('.notif3')
let count = 3;

bullets.forEach((bullet)=>{
  bullet.addEventListener('click', (e)=>{
    let element = e.currentTarget.classList;
    if(element.contains('bullet1')){
      counter.innerText = --count;
      notif1.style.backgroundColor = 'white';
      bullet.style.display = 'none';
    } else if(element.contains('bullet2')){
      counter.innerText = --count;
      notif2.style.backgroundColor = 'white';
      bullet.style.display = 'none';
    } else if(element.contains('bullet3')){
      counter.innerText = --count;
      notif3.style.backgroundColor = 'white';
      bullet.style.display = 'none';
    }
  })
  markAll.addEventListener('click', ()=>{
    counter.innerText = 0;
    notif1.style.backgroundColor = 'white';
    notif2.style.backgroundColor = 'white';
    notif3.style.backgroundColor = 'white';
    bullet.style.display = 'none';
  })
})
