const { randomInt } = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = randomInt(11);
console.log('Bem vindo(a) ao jogo de adivinhação');

function makeGuess(triesLeft){
    if (triesLeft <= 0){
        console.log('Fim de jogo.\nO número a ser adivinhado era' + randomNumber);
        rl.close();
        return;
    }

    rl.question('Escolha um número de 0 a 10: ', (chosenNumber) => {
        if (chosenNumber == randomNumber){
            console.log('Parabéns, você adivinhou o número certo (' + randomNumber + ')');
            rl.close();
            return;
        }

        
        console.log('Você errou o número, e tem mais ' + (triesLeft - 1) + ' tentativas');
        makeGuess(triesLeft - 1);
        });
}

makeGuess(3);



/* Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.*/