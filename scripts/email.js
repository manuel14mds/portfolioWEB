const button = document.getElementById('copyEmail')
button.addEventListener('click', () => {
    const emailAddress = 'manuel14mds@gmail.com'


    navigator.clipboard.writeText(emailAddress)
        .then(() => {
            changeBtnStyle()
        })
        .catch(err => {
            console.log('manuel14mds@gmail.com')
        });

});

function changeBtnStyle() {
    button.innerText = 'copied'
    button.classList.add('copied_btn')

    setTimeout(() => {
        button.innerText = 'copy'
        button.classList.remove('copied_btn')
    }, 3000)
}


const obj={
    service:"service_q8njkou",
    template:"template_6gfc1of",
    init:"kCJy6WiJZOqlOQite"
}
emailjs.init(obj.init);

let form = document.getElementById('form')

form.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const data = new FormData(form)
    let params = {}
    data.forEach((value,key)=>params[key]=value)
    emailjs.send(obj.service, obj.template, params, obj.init);

    form.reset()

    Toastify({
        text: "Email sent successfully",
        className: "info",
        style: {
        background: "#81A68C",
        color: '#2a3242'
        },
        duration:3800
    }).showToast()
})
