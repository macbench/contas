contas = ["Caixa","Bancos","Depósitos à ordem","Depósitos à prazo","Compras","Mercadorias"]


t=""

for(i in contas){
  t+= "<li>"+contas[i]+"</li>"
  contas[i] = contas[i].toLowerCase()
}
lista.innerHTML = t
pesquisa.onkeyup = function(e){
  t = this.value
  
  r = new RegExp(t,"g")

  for(i in contas){
    if(contas[i].match(r) ){
      lista.children[i].removeAtribute("style")
    }else{
      lista.children[i].style.display="none"
    }
      
  }
}