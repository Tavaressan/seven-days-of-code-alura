
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Qual é o seu nome? ', (user_name) => {
	rl.question('Quantos anos você tem? ', (user_age) => {
		rl.question('Qual linguagem de programação você está estudando? ', (user_language) => {
			const msg = `Olá ${user_name}, você tem ${user_age} e já está aprendendo ${user_language}`;
			console.log(msg);
			rl.question(`Você gosta de estudar ${user_language}?\nResponda com o número 1 para SIM ou 2 para NÃO. `, (optional_exercise) => {
				if (optional_exercise == '1') {
					console.log('Muito bom! Continue estudando e você terá muito sucesso.');
				} else if (optional_exercise == '2') {
					console.log('Ahh que pena... Já tentou aprender outras linguagens?');
				} else {
					console.log('Essa não é uma resposta válida, cabeção!');
				}
				rl.close();
			});
		});
	});
});


/* Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?*/





