contas = [
  "<strong>CLASSE 1 - MEIOS CIRCULANTES</strong>",
  "<strong>11	Caixa</strong>","<strong>12	Bancos</strong>","121	Depósitos à ordem","122	Depósitos com pré-aviso","123	Depósitos a prazo","<strong>13	Outros instrumentos financeiros</strong>",
  
  "<strong>CLASSE 2 - INVENTÁRIOS E ACTIVOS BIOLÓGICOS</strong>",
  "<strong>21	Compras</strong>","212	Matérias primas, auxiliares e materiais","2123	Materiais","<strong>22	Mercadorias</strong>","23	Produtos acabados e intermédios","24	Subprodutos, desperdícios, resíduos e refugos","25	Produtos ou serviços em curso","26	Matérias primas, auxiliares e materiais","263	Materiais","<strong>27	Activos biológicos</strong>","271	De produção","272	Consumíveis","28	Regularização de inventários","29	Ajustamentos para o valor realizável líquido",
  
  "<strong>CLASSE 3 - INVESTIMENTOS DE CAPITAL</strong>",
  "<strong>31	Investimentos financeiros</strong>","<strong>32	Activos tangíveis</strong>","321	Construções","<strong>33	Activos intangíveis</strong>","34	Investimentos em curso","35	Activos não correntes detidos para venda ","36	Activos tangíveis de investimento","38	Amortizações acumuladas","382	Activos tangíveis","383	Activos intangíveis","39	Imparidade acumulada de investimentos de capital",
  
  "<strong>CLASSE 4 - CONTAS A RECEBER, A PAGAR, ACRÉSCIMOS E DIFERIMENTOS</strong>",
  "<strong>41	Clientes</strong>","411	Clientes C/C","412	Clientes - Títulos a receber","418	Clientes de cobrança duvidosa","419	Adiantamentos de clientes","<strong>42	Fornecedores</strong>","421	Fornecedores c/c","422	Fornecedores - Títulos a pagar","429	Adiantamentos a fornecedores","<strong>43	Empréstimos obtidos</strong>","431	Empréstimos bancários","432	Empréstimos por obrigações","<strong>44	Estado</strong>","441	Imposto sobre o rendimento","442	Impostos retidos na fonte","443	Imposto sobre o valor acrescentado","4431	IVA suportado","4432	IVA dedutível","44321	Inventários","44322	Activos tangíveis e intangíveis","44323	Outros bens e serviços","4433	IVA liquidado","44331	Operações gerais","4434	IVA regularizações","44341	Mensais a favor do sujeito passivo","44342	Mensais a favor do Estado","444	Restantes impostos","446	Impostos diferidos","<strong>45	Outros devedores</strong>","451	Pessoal","452	Subscritores de capital","454	Devedores - sócios, accionistas ou proprietários","455	Subsídios a receber","459	Devedores diversos","<strong>46	Outros credores</strong>","461	Fornecedores de investimentos de capital","4611	Forn de investimentos de capital C/C","4612	Forn de investimentos de capital - Títulos a pagar","4613	Forn de investimentos de capital - Adiantamentos","4614	Forn de investimentos de capital - Locação Financeira","4619	Outras operações","462	Pessoal","467	Credores - sócios, accionistas ou proprietários","<strong>47	Perdas por imparidade acumuladas de contas a receb</strong>","<strong>48	Provisões</strong>","<strong>49	Acréscimos e diferimentos</strong>","491	Acréscimos de gastos","492	Rendimentos diferidos","493	Acréscimos de rendimentos","494	Gastos diferidos",
  
  "<strong>CLASSE 5 - CAPITAL PRÓPRIO</strong>",
  "<strong>51	Capital</strong>","52	Acções ou quotas próprias","53	Prestações suplementares","54	Prémios de emissão de acções ou quotas","55	Reservas","56	Excedentes de revalorização de activ.tang.e intang","561	Revalorizações legais","562	Outros excessos","58	Outras variações no capital próprio","<strong>59	Resultados transitados</strong>",
  
  "<strong>CLASSE 6 - GASTOS E PERDAS</strong>",
  "<strong>61	Custo dos inventários</strong>","611	Custo dos inventários vendidos ou consumidos","6116	De matérias primas, auxiliares e materiais","612	Variação da produção","<strong>62	Gastos com o pessoal</strong>","625	Ajudas de custo","626	Indemnizações","<strong>63	Fornecimentos e serviços de terceiros</strong>","632	Fornecimentos e serviços","63213	Combustíveis","632131	Gasóleo","632132	Restantes combustíveis","632133	Lubrificantes","63215	Material de manutenção e reparação","63227	Publicidade e propaganda","63228	Deslocações e estadias","63232	Rendas e alugueres","63233	Seguros","64	Perdas por imparidade do período","648	Contas a receber","65	Amortizações do período","651	Activos tangíveis","652	Activos intangíveis","66	Provisões do período","67	Perdas por redução do justo valor","68	Outros gastos e perdas operacionais","682	Impostos e taxas","683	Perdas em investimentos de capital","684	Perdas em inventários e activos biológicos","689	Outros gastos operacionais","6895	Donativos","69	Gastos e perdas financeiros","691	Juros suportados","6916	Juros de mora e compensatórios","694	Diferenças de câmbio desfavoráveis","698	Outros gastos e perdas financeiros",
  
  "<strong>CLASSE 7 - RENDIMENTOS E GANHOS</strong>",
  "<strong>71	Vendas</strong>","<strong>72	Prestação de serviços</strong>","73	Investimentos realizados pela própria empresa","74	Reversões do período","741	De perdas por imparidade","742	De amortizações","743	De provisões","75	Rendimentos suplementares","76	Outros rendimentos e ganhos operacionais","761	Subsídios para investimentos","762	Subsídios à exploração","763	Ganhos em investimentos de capital","764	Ganhos em inventários e activos biológicos","769	Outros rendimentos alheios ao valor acrescentado","78	Rendimentos e ganhos financeiros","781	Juros obtidos","784	Diferenças de câmbio favoráveis","79	Ganhos por aumento do justo valor",
  
  "<strong>CLASSE 8 - RESULTADOS</strong>",
  "81	Resultados operacionais","82	Resultados financeiros","83	Resultados correntes","85	Imposto sobre o rendimento","88	Resultado líquido do período","89	Dividendos antecipados"
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