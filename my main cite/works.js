let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function(){
    let items = document.querySelector('.item')
    document.querySelector('.slide').appendChild(items[0]) 
})

prev.addEventListener('click',function(){
    let items = document.querySelector('.item')
    document.querySelector('.slide').prepend(items[items.length -1]) 
})