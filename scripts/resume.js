try {
    const seeResumeBtn = document.getElementById('see-resume')
    seeResumeBtn.addEventListener('click', ()=>{
        window.open('./docs/ManuelFlorez-software-developer.pdf', '_blank');
    })
    
    const downloadResumeBtn = document.getElementById('downloadResume')
    downloadResumeBtn.addEventListener('click', ()=> {
        window.open('./docs/ManuelFlorez-software-developer.pdf', '_blank');
    });
    
} catch (error) {
    
}

try {
    const verCV = document.getElementById('ver-CV')
    verCV.addEventListener('click', ()=>{
        window.open('../docs/ManuelFlorez-desarrollador-software.pdf', '_blank');
    })
    
    const descargarCV = document.getElementById('descargarCV')
    descargarCV.addEventListener('click', ()=> {
        window.open('../docs/ManuelFlorez-desarrollador-software.pdf', '_blank');
    });
    
} catch (error) {
    
}