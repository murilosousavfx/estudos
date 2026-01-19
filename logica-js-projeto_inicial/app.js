// AULA 1 //

alert('Boas vindas ao jogo do Número Secreto!');

let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');

if (numeroSecreto == chute) {
    console.log(`Parabéns, você descobriu o número secreto! (29)`)
}

// atividade // são exercícios separados!

alert('Boas vindas ao nosso site!');

let nome = "Lua";

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos");

let mensagemDeErro = ("Erro! Preencha todos os campos");
alert(mensagemDeErro);

let nomeDoUsuario = prompt("Digite o seu nome") /

    let idade = prompt("Digite a sua idade");

let idade = prompt("Digite a sua idade");
if (idade >= 18) {
    alert("Pode tirar habilitação!");
}

// AULA 2 // CONTINUAÇÃO DO CÓDIGO DA PRIMEIRA AULA

alert('Boas vindas ao jogo do Número Secreto!');

let numeroSecreto = 29;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// enquanto
while (chute != numeroSecreto) {

    chute = prompt("Escolha um número entre 1 e 10");

    if (chute == numeroSecreto) {
        break;
        
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }

    tentativas++;

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
if (tentativas > 1) {
    alert(`Parabéns, você descobriu o número secreto! ${numeroSecreto} com ${tentativas}`);
} else {
    alert(`Parabéns, você descobriu o número secreto! ${numeroSecreto} com ${tentativas}`);
}


// atividades aula 2 

let fimdeSemana = sábado, domingo // errado

let resposta = prompt("Qual é o dia semana?");
if (resposta == fimdeSemana)
    alert("Bom fim de semana!");
else {
    alert("Boa semana!");
}

diaDaSemana = prompt('Qual é o dia da semana?'); // certo
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

let numero = prompt("Digite um número: ");
if (numero > 0) {
    alert("Seu número é positivo!");
} else {
    ("Seu número é negativo!")
}

pontuação = 105;

if (pontuação >= 100) {
    console.log("Parabéns, você venceu!")
} else {
    console.log("Tente novamente para ganhar!")
}

let saldoConta = 500;
alert(`Seu saldo é de R$${saldoConta}.`);

let nome = prompt("Digite o seu nome: ");
alert(´Bem vindo ao jogo ${ nome }´);

// atividades aula 3 

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}

let numeroMaximo = prompt("Digite um número: ")

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

let NumeroMaximo = prompt("Digite um número: ")
let contador = 0;

while (contador <= NumeroMaximo) {
    console.log(contador);
    contador++;
}
