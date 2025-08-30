const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNewTech() {
    rl.question('Tem mais alguma tecnologia que você gostaria de aprender? (ok ou não) ', (learn_new_tech) => {
        if (learn_new_tech.toLowerCase() === 'ok') {
            rl.question('Que outra tecnologia você quer aprender? ', (new_tech) => {
                console.log('Que bom que você quer aprender ' + new_tech + '!');
                askNewTech();
            });
        } else {
            console.log('Obrigado por jogar!');
            rl.close();
        }
    });
}

rl.question('Para que stack você quer seguir? Front-End ou Back-End (f ou b) ', (user_stack) => {
    if (user_stack.toLowerCase() === 'f') {
        rl.question('Você quer aprender React ou Vue? (r ou v) ', (user_front_tech) => {
            rl.question('Você quer seguir se especializando em Front-End ou seguir se desenvolvendo para se tornar Fullstack? (c ou f) ', (user_front_path) => {
                if (user_front_path.toLowerCase() === 'c') {
                    console.log('Você escolheu seguir no Front-End');
                } else if (user_front_path.toLowerCase() === 'f') {
                    console.log('Você escolheu se tornar Fullstack.');
                } else {
                    console.log('Essa não é uma resposta válida, cabeção!');
                }
                askNewTech();
            });
        });
    } else if (user_stack.toLowerCase() === 'b') {
        rl.question('Você quer aprender C# ou Java? (c ou j) ', (user_back_tech) => {
            rl.question('Você quer seguir se especializando em Back-End ou seguir se desenvolvendo para se tornar Fullstack? (c ou f) ', (user_back_path) => {
                if (user_back_path.toLowerCase() === 'c') {
                    console.log('Você escolheu seguir no Back-End');
                } else if (user_back_path.toLowerCase() === 'f') {
                    console.log('Você escolheu se tornar Fullstack.');
                } else {
                    console.log('Essa não é uma resposta válida, cabeção!');
                }
                askNewTech();
            });
        });
    } else {
        console.log('Essa não é uma resposta válida, cabeção!');
        rl.close();
    }
});





/*Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. 
Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, 
o usuário poderá escolher entre seguir se especializando na área escolhida 
ou seguir se desenvolvendo para se tornar Fullstack. 
Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar 
ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. 
Então, enquanto ela continuar respondendo ok para a pergunta: 
“Tem mais alguma tecnologia que você gostaria de aprender?”, 
continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. 
E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida. */