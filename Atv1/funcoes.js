/* EXC 1 - IMC */

/* Declaração das variáveis principais */

function CalcIMC(){
    /* Puxando os valores do formulario para as variáveis e já convertendo */
    const nome = document.formIMC.nome.value;
    const altura = parseFloat(document.formIMC.altura.value) / 100;
    const peso = parseFloat(document.formIMC.peso.value);

    /* Indicando o H3 para a amostragem do resultado */
    let h3resIMC = document.querySelector("#resIMC");

    /* Conta do IMC e declaração da variável resultado */
    let imc = peso / (altura ** 2);
    let resultado = "";

    /* Uso do SWITCH para comparar em qual faixa o usuário se encontra e declarar a variável resultado para amostragem futura */
    switch(true){
        case (imc < 16): resultado = "Baixo peso muito grave"; break;
        case (imc >= 16 && imc <= 16.99): resultado = "Baixo peso grave"; break;
        case (imc >= 17 && imc <= 18.49): resultado = "Baixo peso"; break;
        case (imc >= 18.50 && imc <= 24.99): resultado = "Peso normal"; break;
        case (imc >= 25 && imc <= 29.99): resultado = "Sobrepeso"; break;
        case (imc >= 30 && imc <= 34.99): resultado = "Obesidade grau I"; break;
        case (imc >= 35 && imc <= 39.99): resultado = "Obesidade grau II"; break;
        case (imc > 40): resultado = "Obesidade grau III"; break;
    }

    /* Conjunto de consoles.log para verificar o valor de cada variavel */
    console.log(imc);
    console.log(altura);
    console.log(resultado);
    console.log(peso);

    /* InnerText para mostrar o texto no próprio HTML */
    h3resIMC.innerText = `${nome} possui  índice  de  massa  corporal  igual  a ${imc.toFixed(2)}, sendo classificado como: ${resultado}!`;
}

/* EXC 2 - Faixa Etária */

/* Declaração da variável */

function FaixaEtaria(){
    /* Puxando o valor do formulario para a variável e puxando também o h3 para a exibição da resposta */
    const idade = parseInt(document.formFE.idade.value);
    let h3resFE = document.querySelector("#resFE");

    /* Uso do SWITCH para verificar sua faixa etária e já enviando a resposta ao elemento html */
    switch(true){
        case(idade >= 0 && idade < 15): h3resFE.innerText = `Você é CRIANÇA!`; break;
        case(idade >= 15 && idade < 30): h3resFE.innerText = `Você é JOVEM!`; break;
        case(idade >= 30 && idade < 60): h3resFE.innerText = `Você é ADULTO!`; break;
        case(idade >= 60): h3resFE.innerText = `Você é IDOSO!`; break;
        case(idade < 0): h3resFE.innerText = `Idade não pode ser menor do que 0!`; break;
    }
}

/* EXC 3 - Média Ponderada */

/* Declaração das variáveis principais */

function CalcMedia(){
    /* Puxando os valores do formulario para as variáveis e tamvém o h3 para amostragem do resultado na tela */
    const atvPratica = parseFloat(document.formMP.atvPratica.value);
    const provaSem = parseFloat(document.formMP.provaSem.value);
    const trabTeorico = parseFloat(document.formMP.trabTeorico.value);
    let h3resMP = document.querySelector("#resMP");

    /* Cálculo da média e criação da variável de classificação */
    let media = ((atvPratica * 2) + (provaSem * 5) + (trabTeorico * 3)) / 10;
    let classificacao = '';

    /* Uso do SWITCH para saber a classificação do aluno baseado na sua nota */
    switch(true){
        case (media >= 0 && media <= 5): classificacao = 'F'; break;
        case (media > 5 && media <= 6): classificacao = 'E'; break;
        case (media > 6 && media <= 7): classificacao = 'D'; break;
        case (media > 7 && media <= 8): classificacao = 'C'; break;
        case (media > 8 && media <= 9): classificacao = 'B'; break;
        case (media > 9 && media <= 10): classificacao = 'A'; break;
    }

    /* Exibição do resultado no html */
    h3resMP.innerText = `A média do aluno é = ${media}, e sua classificação é ${classificacao}!`;
}

/* EXC 4 - Fretamento de peças */

function CalcFrete(){
    const distancia = parseFloat(document.formFrete.distancia.value);
    const quantia = parseFloat(document.formFrete.quantia.value);
    const litroComb = parseFloat(document.formFrete.litro.value);
    const regioes = document.querySelector("#regioes");
    const simSelec = document.querySelector("#sim");
    const naoSelec = document.querySelector("#nao");
    let h3resFrete = document.querySelector("#resFrete");
    
    let valFrete = 0;
    let valDesconto = 0;
    let valorUnicoFrete = 0;
    let conta = 0;

    let totalComb = distancia * litroComb;
    let regiao = regioes.options[regioes.selectedIndex].value;

    if(regiao == 'sul'){
        valFrete = 1;
        valDesconto = 0.90; // Como tem 10% de desconto, o valor ficará 90% do que era pra ser
    } else if(regiao == 'sudeste'){
        valFrete = 1.20;
        valDesconto = 0.88; // Como tem 12% de desconto, o valor ficará 88% do que era pra ser
    } else{
        valFrete = 1.30;
        valDesconto = 0.87; // Como tem 13% de desconto, o valor ficará 87% do que era pra ser
    }

    console.log('Região selecionada, valfrete e valdesconto: ' + regiao + ' ' + valFrete + ' ' + valDesconto);

    if(simSelec.checked == true && quantia > 1000){
        valorUnicoFrete = (1000 * valFrete) + ((quantia - 1000) * (valFrete * valDesconto));
        conta = valorUnicoFrete + totalComb + 200;
    } else if(simSelec.checked == true && quantia <= 1000){
        valorUnicoFrete = (quantia * valFrete);
        conta = valorUnicoFrete + totalComb + 200;
    } else if(naoSelec.checked == true && quantia > 1000){
        valorUnicoFrete = (1000 * valFrete) + ((quantia - 1000) * (valFrete * valDesconto));
        conta = valorUnicoFrete + totalComb;
    } else{
        valorUnicoFrete = (quantia * valFrete);
        conta = valorUnicoFrete + totalComb;
    }

    h3resFrete.innerText = `Taxa do rastreamento: R$ 200.00\nValor do frete pelas peças: R$ ${valFrete.toFixed(2)}/ Total: R$ ${valorUnicoFrete.toFixed(2)}\nValor do frete por quilômetro: R$ ${litroComb.toFixed(2)} / Total: R$ ${totalComb.toFixed(2)}\nTotal do frete: R$ ${conta.toFixed(2)}`
}

/* EXC 5 */

function CalcPagamento(){
    const codigo = parseInt(document.formPagamento.codigo.value);
    const horasTrab = parseInt(document.formPagamento.horasTrab.value);
    const salMinimo = parseFloat(document.formPagamento.salMinimo.value);
    const turnos = document.querySelector("#turnos");
    const categorias = document.querySelector("#categorias");
    const h3resSalario = document.querySelector("#resSalario");

    const turno = turnos.options[turnos.selectedIndex].value;
    const categoria = categorias.options[categorias.selectedIndex].value;

    let salHora = 0;

    if(categoria == 'G'){
        salHora = salMinimo * 0.04;
    } else if(categoria == 'F' && turno == 'N'){
        salHora = salMinimo * 0.02;
    } else{
        salHora = salMinimo * 0.01;
    }

    const salInicial = salHora * horasTrab;
    let auxAlimentacao = 0;

    if(salInicial > 1200){
        auxAlimentacao = salInicial * 0.15;
    } else if(salInicial >= 800){
        auxAlimentacao = salInicial * 0.20;
    } else{
        auxAlimentacao = salInicial * 0.25;
    }

    h3resSalario.innerText = `Código do Funcionário/Gerente: ${codigo}\nNúmero de horas trabalhadas: ${horasTrab}h / Valor de cada hora: R$${salHora.toFixed(2)}\nSalário Inicial: R$${salInicial.toFixed(2)} / Auxílio Alimentação: R$${auxAlimentacao.toFixed(2)}\nSalário Final: R$${(salInicial + auxAlimentacao).toFixed(2)}`;
}

/* EXC 6 - Cálculo Aritmético */

function CalcAritm(){
    const num1 = parseFloat(document.calcAritmetico.num1.value);
    const num2 = parseFloat(document.calcAritmetico.num2.value);
    const operacao = document.calcAritmetico.operacao.value;
    let h3resAritm = document.querySelector("#resAritmetico");

    let conta = 0;

    if(operacao.toLowerCase() == 'soma'){
        conta = num1 + num2;
    } else if(operacao.toLowerCase() == 'subtração'){
        conta = num1 - num2; 
    } else if(operacao.toLowerCase() == 'multiplicação'){
        conta = num1 * num2;
    } else if(operacao.toLowerCase() == 'divisão'){
        conta = num1 / num2;
    } else if(operacao.toLowerCase() == 'potenciação'){
        conta = num1 ** num2;
    } else{
        resp = 'Operação escrita de forma errônea ou indisponível!';
    }

    if(conta > 0){
        h3resAritm.innerText = `O resultado da conta é: ${conta}`;
    } else{
        h3resAritm.innerText = resp;
    }
}

/* EXC 7 - Data por Extenso */

function TransData(){
    const data = document.formData.data.value;
    let h3resData = document.querySelector("#resData");

    let dataSplit = data.split('/');
    let mes = dataSplit[1];
    let mesExtenso = '';

    if(parseInt(mes) <= 0 || parseInt(mes) > 12){
        h3resData.innerText = `O mês colocado é inválido! Tem q ser entre 1 e 12!`
        return
    } else if(parseInt(dataSplit[0]) > 31 || parseInt(dataSplit[0]) < 1) {
        h3resData.innerText = `O dia colocado é inválido! Tem q ser entre 1 e 31!`
        return 
    }

    switch(parseInt(mes)){
        case 1: mesExtenso = 'Janeiro'; break;
        case 2: mesExtenso = 'Fevereiro'; break;
        case 3: mesExtenso = 'Março'; break;
        case 4: mesExtenso = 'Abril'; break;
        case 5: mesExtenso = 'Maio'; break;
        case 6: mesExtenso = 'Junho'; break;
        case 7: mesExtenso = 'Julho'; break;
        case 8: mesExtenso = 'Agosto'; break;
        case 9: mesExtenso = 'Setembro'; break;
        case 10: mesExtenso = 'Outubro'; break;
        case 11: mesExtenso = 'Novembro'; break;
        case 12: mesExtenso = 'Dezembro'; break;
    }

    h3resData.innerText = `${dataSplit[0]} de ${mesExtenso} de ${dataSplit[2]}`;
    
}