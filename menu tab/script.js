function change(camisa){
   document.querySelector('.troca').src=camisa;

}

let imgs = document.querySelectorAll('.produtos img');
 imgs[1].addEventListener('mouseover',function(){
       change('img/produto2.jpg');
    document.querySelector('.info h2').innerHTML= 'camisa azul manga longa'
 })
 imgs[2].addEventListener('mouseover',function(){
    change('img/produto3.jpg');
 document.querySelector('.info h2').innerHTML= 'camisa vermelha listrada'
})
imgs[0].addEventListener('mouseover',function(){
    change('img/produto 1.jpg');
 document.querySelector('.info h2').innerHTML= 'camisa vermelha manga longa'
})
