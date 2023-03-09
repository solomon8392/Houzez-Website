const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideimage = document.querySelector('.slideimage')


prev.addEventListener('click', () => {
    slideimage.scrollLeft -=300
})
next.addEventListener('click', () => {
    slideimage.scrollLeft +=300
})