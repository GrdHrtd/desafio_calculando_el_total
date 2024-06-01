const total=document.querySelector("#total");
const btnSuma=document.querySelector("#suma");
const btnResta=document.querySelector("#resta");
const cantidad=document.querySelector("#cantidad");
const valor=document.querySelector("#valor");

const stock=5;
const precio=400000;
let cant=0;
let tot=precio*cant;

total.innerHTML=tot;
valor.innerHTML=precio;
cantidad.innerHTML=cant;

btnSuma.addEventListener("click",()=>{
    if(cant<stock){
        cant=cant+1;
        tot=precio*cant;
        cantidad.innerHTML=cant;
        total.innerHTML=tot;
    }
    else{
        alert("Lo sentimos, llegaste al máximo de unidades por cliente")
    }
});

btnResta.addEventListener("click",()=>{
    if(cant>0){
        cant=cant-1;
        tot=precio*cant;
        cantidad.innerHTML=cant;
        total.innerHTML=tot;
    }
    else{
        alert("Anímate! Pocas unidades disponibles en esta oferta")
    }
});