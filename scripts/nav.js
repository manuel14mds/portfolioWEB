const openBtn = document.getElementById('openMenu')
openBtn.addEventListener('click', ()=>{
    document.body.style.setProperty('--scroll-page', 'hidden')
})
const closeBtn = document.getElementById('closeMenu')
closeBtn.addEventListener('click', ()=>{
    document.body.style.setProperty('--scroll-page', 'scroll')
})