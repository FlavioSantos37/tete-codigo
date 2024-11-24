const bt1 = document.querySelector('.click1')
function clique(){
    const inputN1 = parseInt( document.querySelector(".n1").value)
    const inputN2 = parseFloat( document.querySelector('.n2').value)
    const vldesconto = document.querySelector('.valorcomdesconto')
    vldesconto.innerHTML= inputN1*inputN2
}
    bt1.addEventListener('click',clique);