contas = [

  "<strong>CLASSE 1 - MEIOS CIRCULANTES</strong>",
  "1.1 Caixa","<strong>1.2 Bancos</strong>","&nbsp;&nbsp; 1.2.1 Depósitos à ordem","&nbsp;&nbsp; 1.2.2 Depósito com pré-aviso","&nbsp;&nbsp; 1.2.3 Depósitos à prazo",
  
  "<strong>CLASSE 2 - INENTÁRIOS E ACTIVOS BIOLÓGICOS</strong>",
  "2.1 Compras","2.2 Mercadorias",

  "<strong>CLASSE 3 - INVESTIMENTOS DE CAPITAL</strong>",
  "<strong>CLASSE 4 - CONTAS A RECEBER, A PAGAR, ACRÉSCIMOS E DIF.</strong>",
  "<strong>CLASSE 5 - CAPITAL PRÓPRIO</strong>",
  "<strong>CLASSE 6 - GASTOS E PERDAS</strong>",
  "<strong>CLASSE 7 - RENDIMENTOS E GANHOS</strong>",
  "<strong>CLASSE 8 - RESULTADOS</strong>",


]


t=""

for(i in contas){
  t+= "<li>"+contas[i]+"</li>"
  contas[i] = contas[i].toLowerCase()
}
lista.innerHTML = t
pesquisa.onkeyup=function(e){
  t = this.value.toLowerCase()
  
  r = new RegExp(t,"g")

  for(i in contas){
    if(contas[i].match(r)){
      lista.children[i].removeAttribute("style")
    }else{
      lista.children[i].style.display="none"
    }
      
  }
}