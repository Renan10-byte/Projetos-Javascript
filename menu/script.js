let mark = document.querySelector('.mark');
let lista = document.querySelectorAll('ul li ');

function moveIndicador(e){
    mark.style.left = e.offsetLeft+ 'px';
    mark.style.left = e.offsetWith+ 'px';
}

lista.forEach((links)=>{
    links.addEventListener('mousemove',(e)=>{
        moveIndicador(e.target);
    })

})
function ativar(){
    lista.forEach((item)=>{
        item.classList.remove('ativo')
        this.classList.add('ativo')
    })
}
   
    lista.forEach((item)=>{
        item.addEventListener('mousemove',ativar)})
