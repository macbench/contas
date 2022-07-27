

buscar.addEventListener("click", ()=>{

    buscar.style.color = "#4e1f99"
    pesquisar.style.display = "block"
    logo.style.display = "none"
    cxPsq.style.width = "100%"
    closePsq.style.display = "flex"

})

closePsq.addEventListener("click", ()=>{
  
    pesquisar.reset
    pesquisar.style.display = "none"
    buscar.style.color = "white"
    closePsq.style.display = "none"
    logo.style.display = "flex"
    cxPsq.style.width = "0%"
})
 


