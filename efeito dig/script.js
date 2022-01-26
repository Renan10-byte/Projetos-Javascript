
function escrever(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML=''
    textArray.forEach((letra,index)=>{
        setTimeout(function(){
             element.innerHTML += letra
        },90 * index)
        
    })
    
}
 
const titulo = document.querySelector('h1')
let inter = 1000
setInterval(escrever(titulo),inter)
