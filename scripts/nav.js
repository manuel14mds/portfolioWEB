/* function checkIfTarget() {
    let currentHash
    setTimeout(()=>{
        currentHash = window.location.hash;
        let targetElement = document.getElementById("nav");
        console.log('hash',currentHash)
        console.log('target',targetElement)
    
        if (currentHash === "#nav") {
            // El elemento es el target actual
            document.body.style.setProperty('--scroll-page', 'hidden')
        } else {
            // El elemento no es el target
            document.body.style.setProperty('--scroll-page', 'scroll')
        }
    },500)
} */

/* 
const openBtn = document.getElementById('openMenu')
openBtn.addEventListener('click', () => {
    history.pushState({}, '', '#nav');
})
const closeBtn = document.getElementById('closeMenu')
closeBtn.addEventListener('click', () => {
    history.replaceState({}, '', window.location.pathname + window.location.search);
}) */