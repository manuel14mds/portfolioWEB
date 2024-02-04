try {
    const seeResumeBtn = document.getElementById('see-resume')
    seeResumeBtn.addEventListener('click', ()=>{
        window.open('./docs/Manuel_Florez-software_developer.pdf', '_blank');
    })
    
    const downloadResumeBtn = document.getElementById('downloadResume')
    downloadResumeBtn.addEventListener('click', ()=> {
        window.open('./docs/Manuel_Florez-software_developer.pdf', '_blank');
    });
    
} catch (error) {
    
}

try {
    const verCV = document.getElementById('ver-CV')
    verCV.addEventListener('click', ()=>{
        window.open('../docs/Desarrollador_de_Software-Manuel_Florez.pdf', '_blank');
    })
    
    const descargarCV = document.getElementById('descargarCV')
    descargarCV.addEventListener('click', ()=> {
        window.open('../docs/Desarrollador_de_Software-Manuel_Florez.pdf', '_blank');
    });
    
} catch (error) {
    
}