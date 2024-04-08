var shado=document.querySelectorAll('.btn')

for (let i = 0; i < shado.length; i++) { 
    shado[i].addEventListeners('click',bg)
    function bg(){
        shado[i].classList.add('bg')
    }
    
}
