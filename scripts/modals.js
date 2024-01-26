const skillsDialog = document.getElementById('skills-dialog')
const skillsOpenBtn = document.getElementById('skills-dialog-open')

skillsOpenBtn.addEventListener("click", () => {
    skillsDialog.showModal();
});