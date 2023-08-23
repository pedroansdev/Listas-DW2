/* EXC 1 - IMC */

/* Declaração das variáveis principais */
var nome;
var altura;
var peso;
var h3resIMC;

function CalcIMC(){
    /* Puxando os valores do formulario para as variáveis e já convertendo */
    nome = document.formIMC.nome.value;
    altura = parseFloat(document.formIMC.altura.value) / 100;
    peso = parseFloat(document.formIMC.peso.value);

    /* Indicando o H3 para a amostragem do resultado */
    h3resIMC = document.querySelector("#resIMC");

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
var idade;
var h3resFE;

function FaixaEtaria(){
    /* Puxando o valor do formulario para a variável e puxando também o h3 para a exibição da resposta */
    idade = parseInt(document.formFE.idade.value);
    h3resFE = document.querySelector("#resFE");

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
var atvPratica;
var provaSem;
var trabTeorico;
var h3resMP;

function CalcMedia(){
    /* Puxando os valores do formulario para as variáveis e tamvém o h3 para amostragem do resultado na tela */
    atvPratica = parseFloat(document.formMP.atvPratica.value);
    provaSem = parseFloat(document.formMP.provaSem.value);
    trabTeorico = parseFloat(document.formMP.trabTeorico.value);
    h3resMP = document.querySelector("#resMP");

    /* Cálculo da média e criação da variável de classificação */
    media = ((atvPratica * 2) + (provaSem * 5) + (trabTeorico * 3)) / 10;
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

var distancia;
var quantia;
var regioes;
var simSelec;
var naoSelec;
var valFrete;
var valDesconto;
var conta;
var h3resFrete;
var valorUnicoFrete;

function CalcFrete(){
    distancia = parseFloat(document.formFrete.distancia.value);
    quantia = parseFloat(document.formFrete.quantia.value);
    regioes = document.querySelector("#regioes");
    simSelec = document.querySelector("#sim");
    naoSelec = document.querySelector("#nao");
    h3resFrete = document.querySelector("#resFrete");
    
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
        conta = valorUnicoFrete + distancia + 200;
    } else if(simSelec.checked == true && quantia <= 1000){
        valorUnicoFrete = (quantia * valFrete);
        conta = valorUnicoFrete + distancia + 200;
    } else if(naoSelec.checked == true && quantia > 1000){
        valorUnicoFrete = (1000 * valFrete) + ((quantia - 1000) * (valFrete * valDesconto));
        conta = valorUnicoFrete + distancia;
    } else{
        valorUnicoFrete = (quantia * valFrete);
        conta = valorUnicoFrete + distancia;
    }

    console.log('SimSelec e NaoSelec' + simSelec + ' ' + naoSelec)

    console.log(conta);

    h3resFrete.innerText = `Taxa do rastreamento: R$ 200.00\nValor do frete pelas peças: R$ ${valFrete.toFixed(2)}/ Total: R$ ${valorUnicoFrete.toFixed(2)}\nValor do frete por quilômetro: R$ 1.00 / Total: R$ ${distancia.toFixed(2)}\nTotal do frete: R$ ${conta.toFixed(2)}`
}