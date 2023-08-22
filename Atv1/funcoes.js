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
    idade = parseInt(document.formFE.idade.value);
    h3resFE = document.querySelector("#resFE");

    switch(true){
        case(idade >= 0 && idade < 15): h3resFE.innerText = `Você é CRIANÇA!`; break;
        case(idade >= 15 && idade < 30): h3resFE.innerText = `Você é JOVEM!`; break;
        case(idade >= 30 && idade < 60): h3resFE.innerText = `Você é ADULTO!`; break;
        case(idade >= 60): h3resFE.innerText = `Você é IDOSO!`; break;
        case(idade < 0): h3resFE.innerText = `Idade não pode ser menor do que 0!`; break;
    }
}