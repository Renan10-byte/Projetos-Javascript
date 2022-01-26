let slider = document.querySelector('.slider');
let controls = document.querySelectorAll('.controls li')
let controls2 = document.querySelectorAll('.controls2 li')
let parent = document.querySelector('.controls')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

controls[0].classList.add('ativo')
let starter = 0;
let botomAtual = 0;

// botao next
    function nextSlide(){
          
            starter++;
           
            if(starter > 3){
                starter = 3;
            }
            document.querySelector('.controls .ativo').classList.remove('ativo')
            slider.style.transform ='translate('+ (starter)* -20 + '%)';
            parent.children[starter].classList.add('ativo');
            
        }

    next.addEventListener('click',nextSlide)


// botao prev
    function prevSlide(){
        
        starter = (starter > 0) ? starter -1 :0;
        document.querySelector('.controls .ativo').classList.remove('ativo')
    
        slider.style.transform ='translate('+ (starter)* -20 + '%)';
        slider.style.transition='1s'
      
        parent.children[starter].classList.add('ativo');
        
    }
    prev.addEventListener('click',prevSlide);
// setInterval(carrousel,5000);

function nav(index){
   controls.forEach((ind)=>{
       ind.classList.remove('ativo')
   })
    controls[index].classList.add('ativo');
 
}

controls.forEach((item,index)=>{
    item.addEventListener('click',function(){
        nav(index)
       
        starter=index;
        slider.style.transform ='translate('+ (starter)* -20 + '%)';
        if(starter > 2){
            starter = -1;
        }
     
    })
})



