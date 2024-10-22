const bt = document.querySelector(".btclique")

function cliques (){
    const inputNome = document.querySelector('.nome').value
    const inputEnd= document.querySelector('.end').value
    const result = document.querySelector('.resultado')
    const result1 =document.querySelector('.resultado1')

    result.innerHTML = inputNome
    result1.innerHTML= inputEnd
}

bt.addEventListener("click",cliques)