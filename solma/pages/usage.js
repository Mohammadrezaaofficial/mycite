//scrolling page
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    });
});
  
const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));
  
//slides movement
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
  
next.addEventListener('click', function(){
      let items = document.querySelectorAll('.slide')
      document.querySelector('.sliders').appendChild(items[0])
})
  
prev.addEventListener('click', function(){
      let items = document.querySelectorAll('.slide')
      document.querySelector('.sliders').prepend(items[items.length - 1]) // here the length of items = 6
})