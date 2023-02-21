const container = document.querySelector('.container'),
qrinput = container.querySelector('.form input'),
generatebtn = container.querySelector('.form button'),
qrimg = container.querySelector('.qr-code .img');

generatebtn.addEventListener('click', () => {
    let qrValue = qrinput.value;
    if(!qrValue){
        alert('Insira uma URL ou texto para gerar um Qr Code')
        return;
    }
    generatebtn.innerText = "Gerando um Qr code...";
    qrimg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}';
    qrimg.addEventListener('load', () =>{
        generatebtn.innerText = "Gerar Qr Code";
        container.classList.add('active');
    });
});

qrinput.addEventListener('keyup', () =>{
    if(!qrinput.Value){
        wrapper.classList.remove('active');
    };
});