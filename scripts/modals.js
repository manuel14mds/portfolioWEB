// el estado puede ser open o close
let state = "close"

// código para el el body NO haga scroll-Y
function noScroll(){
    document.body.style.overflowY = 'hidden';
    document.body.classList.add('no-scroll');
}

// código para el el body  haga scroll-Y
function scroll(){
    document.body.style.overflowY = 'scroll';
    document.body.classList.remove('no-scroll');
}

// verifica el estado y toma acción
// el valor de event puede ser open o close
function stateValidator(event){
    if(event !== state){
        if( event === "open" && state === "close"){
            noScroll()
            state = "open"
        }else if( event === "close" && state === "open"){
            scroll()
            state = "close"
        }
    } 
}


const skillsDialog = document.getElementById('skills-dialog')
const skillsOpenBtn = document.getElementById('skills-dialog-open')

skillsOpenBtn.addEventListener("click", () => {
    skillsDialog.showModal();
    stateValidator('open')
});

const projectsDialog = document.getElementById('projects-dialog')
const projectsOpenBtn = document.getElementById('projects-dialog-open')

projectsOpenBtn.addEventListener("click", () => {
    projectsDialog.showModal();
    stateValidator('open')
});


// Project modals
const dialog_one = document.getElementById('dialogProject-one')
const projectOne_openBtn = document.getElementById('openDialog-projectOne')
projectOne_openBtn.addEventListener("click", () => {
    dialog_one.showModal();
    stateValidator('open')
});

const dialog_two = document.getElementById('dialogProject-two')
const projectTwo_openBtn = document.getElementById('openDialog-projectTwo')
projectTwo_openBtn.addEventListener("click", () => {
    dialog_two.showModal();
    stateValidator('open')
});

const dialog_three = document.getElementById('dialogProject-three')
const projectThree_openBtn = document.getElementById('openDialog-projectThree')
projectThree_openBtn.addEventListener("click", () => {
    dialog_three.showModal();
    stateValidator('open')
});

const dialog_four = document.getElementById('dialogProject-four')
const projectFour_openBtn = document.getElementById('openDialog-projectFour')
projectFour_openBtn.addEventListener("click", () => {
    dialog_four.showModal();
    stateValidator('open')
});

const dialog_five = document.getElementById('dialogProject-five')
const projectFive_openBtn = document.getElementById('openDialog-projectFive')
projectFive_openBtn.addEventListener("click", () => {
    dialog_five.showModal();
    stateValidator('open')
});

const dialog_six = document.getElementById('dialogProject-six')
const projectSix_openBtn = document.getElementById('openDialog-projectSix')
projectSix_openBtn.addEventListener("click", () => {
    dialog_six.showModal();
    stateValidator('open')
});


document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        // Espera brevemente para que el estado 'open' de los diálogos se actualice
        stateValidator('close')
    }
});

function closeDialog(id){
    document.getElementById(id).close()
    stateValidator('close')
}


