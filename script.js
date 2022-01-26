
let iniciar = document.querySelector('.iniciar');
let parar = document.querySelector('.parar');
let pausar = document.querySelector('.pausar');
let display = document.querySelector('.display');


let ms = 0;
let seg = 0;
let min = 0;
let interval 
function padrão(n){
    if(n <10){
       return ('0'+n);
    }else{
        return(n)
    }

}

function start(){
    interval = setInterval(cronomentro,10);
   
}
iniciar.addEventListener('click',start)


function pause(){
    clearInterval(interval);
}
pausar.addEventListener('click',pause)
function stopCronometro(){
   
    ms = 0;
     seg = 0;
    min = 0;
    document.querySelector('.seg').textContent='00';
    document.querySelector('.min').textContent='00:00';
    clearInterval(interval)
    
     
   

}
parar.addEventListener('click',stopCronometro)

function cronomentro(){
  
    ms++;
    if(ms ===100){
        seg++;
        ms=0;
       if(seg ===60){
           min++
           seg=0;
       }
    }
    
   
  
    document.querySelector('.min').textContent=padrão(min)+":"+padrão(seg);
    document.querySelector('.seg').textContent=padrão(ms)

}
