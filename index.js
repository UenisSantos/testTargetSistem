
/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */


function GenerateFibonacci() {
	let number = document.getElementById('number').value;



	var fibonacci = [];
	fibonacci[0] = 0;
	fibonacci[1] = 1;
	for (var i = 2; i < number; i++) {
		fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];

	}

	fibonacci;

	var acertos;


	fibonacci.forEach(acerto => {

		if (acerto == number) {
			acertos = acerto



			document.getElementById('fibonacci').innerText = acertos + "esse numero pertence a sequencia de fibonacci "


		} else {

			document.getElementById('fibonacci').innerText = acertos + "esse numero  não pertence a sequencia de fibonacci "


		}


	})

}











/*  Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */
function percentualEstado() {

	let estados = [
		SP = 67.83643,
		RJ = 36.67866,
		MG = 29.22988,
		ES = 27.16548,
		OUTROS = 19.84953];


	let total = 0;
	let = controlePorcentagem = 100;



	estados.forEach(function (estado) {
		total += estado

	});

	for (indice = 0; indice <= estados.length - 1; indice++) {
		let porcentagemPorEstado = 0

		porcentagemPorEstado = estados[indice] * controlePorcentagem / total

		let paragrafo = document.createElement('p');
		paragrafo.id = indice
		document.getElementById("faturamento").appendChild(paragrafo)

		switch (indice) {


			case 0:
				paragrafo.innerText =
					` valor de faturamento mensal da distribuidora  SP: ${Math.floor(porcentagemPorEstado)}%`;
				break;

			case 1:
				paragrafo.innerText =

					` valor de faturamento mensal da distribuidora RJ: ${Math.floor(porcentagemPorEstado)}%`;
				break;

			case 2:
				paragrafo.innerText =

					` valor de faturamento mensal da distribuidora MG: ${Math.floor(porcentagemPorEstado)}%`;
				break;

			case 3:
				paragrafo.innerText =

					` valor de faturamento mensal da distribuidora ES: ${Math.floor(porcentagemPorEstado)}%`;
				break;
			case 4:
				paragrafo.innerText =

					` valor de faturamento mensal da distribuidora Demais Estados: ${Math.floor(porcentagemPorEstado)}%`;
				break;
		}

	}


}
percentualEstado()













/* Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

function reverseString() {

	let str = document.getElementById('reverse').value

	var newString = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}


	document.getElementById("string_reverse").innerHTML = newString


}




