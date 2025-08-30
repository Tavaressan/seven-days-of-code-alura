const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(text) {
    return new Promise((resolve) => {
        rl.question(text, (answer) => {
            resolve(answer);
        });
    })
}

function add (n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

async function demandNumbers(){
    const numberOneStr = await question('Qual é o primeiro número? ');
    const numberTwoStr = await question('Qual é o segundo número? ');
    
    const numberOne = Number(numberOneStr);
    const numberTwo = Number(numberTwoStr);

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        console.log('Erro: Por favor, insira apenas números válidos.\n');
        return null;
    }
    
    return [numberOne, numberTwo];
}

async function calculatorMenu(){

    let showMenu = true;

    while(showMenu){
        const operation = await question('Qual operação você quer realizar? (+, -, *, /) ou digite "sair" para encerrar: \n');
        let result;
        let operationName = '';
        let numbersArray;

        switch (operation) {
            case "+":
                operationName = "adição";
                numbersArray = await demandNumbers();
                if (numbersArray) result = add(numbersArray[0], numbersArray[1]);
                break;
            
            case "-":
                operationName = "subtração";
                numbersArray = await demandNumbers();
                if (numbersArray) result = subtract(numbersArray[0], numbersArray[1]);
                break;

            case "*":
                operationName = "multiplicação";
                numbersArray = await demandNumbers();
                if (numbersArray) result = multiply(numbersArray[0], numbersArray[1]);
                break;

            case "/":
                operationName = "divisão";
                numbersArray = await demandNumbers();
                if (numbersArray) {
                    if (numbersArray[1] === 0) {
                        console.log('Erro: Divisão por zero não é permitida.\n');
                        result = undefined; // Evita mostrar resultado antigo
                    } else {
                        result = divide(numbersArray[0], numbersArray[1]);
                    }
                }
                break;
            case "sair":
                showMenu = false;
                break;
            default:
                console.log('Operação não válida. \n');
                break;
        }

        if (result !== undefined) {
            console.log(`O resultado da sua ${operationName} é ${result}\n`);
        }
    }
}

async function main(){
    console.log('Bem-vindo(a) à calculadora! \n');
    await calculatorMenu();
    rl.close();
    console.log('Obrigado por usar a calculadora! \nAté a próxima!');
}

main();










/*
Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, 

porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. 

Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima". */