const btnNo = document.getElementById('cajaFea');
const btnSi = document.getElementById('cajaLinda');
const tarjeta = document.getElementById('tarjeta');
const imgOsito = document.getElementById('ositos');


let pos = [200,-200];
let c = 1;
let c2 = 0;

function cambiarPos(){
    let a = (Math.round(Math.random() * 200));
    let b = (Math.round(Math.random() * -200));

    if((c % 2) == 0){
        btnNo.style.top = `${a}px`; 
        btnNo.style.left = `${b}px`; 
        
    }else{
        btnNo.style.top = `${b}px`; 
        btnNo.style.left = `${a}px`; 
    }

    c++    

};

btnNo.addEventListener('mouseenter', cambiarPos);

btnSi.addEventListener('click', () => {
    tarjeta.classList.remove('d-none');
})



