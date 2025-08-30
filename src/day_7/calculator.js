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

let numbersArray = [];

let result; 

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
    const numberOne = await question('Qual é o primeiro número? ');
    const numberTwo = await question('Qual é o segundo número? ');
    
    return Array.of(Number(numberOne), Number(numberTwo));
}

async function calculatorMenu(){

    let showMenu = true;
    let operationName;

    while(showMenu){
        const operation = await question('Qual operação você quer realizar? (+, -, *, /) \n');
        switch (operation) {
            case "+":
                operationName = "adição";
                numbersArray = await demandNumbers();
                result = await add(numbersArray[0], numbersArray[1]);
                break;
            
            case "-":
                operationName = "subtração";
                numbersArray = await demandNumbers();
                result = await subtract(numbersArray[0], numbersArray[1]);
                break;

            case "*":
                operationName = "multiplicação";
                numbersArray = await demandNumbers();
                result = await multiply(numbersArray[0], numbersArray[1]);
                break;

            case "/":
                operationName = "divisão";
                numbersArray = await demandNumbers();
                result = await divide(numbersArray[0], numbersArray[1]);
                break;
        
            default:
                console.log('Operação não válida. \n');
                break;
        }

        console.log(`O resultado da sua ${operationName} é ${result}`);

        const continueMenu = await question('Você quer continuar a calcular? (sim ou não) \n');
        if (continueMenu.toLowerCase() == "sim") {
            await calculatorMenu();
        }

        console.log('Obrigado por usar a calculadora! \n Até a próxima!')
        return;
    }
}

async function main(){
    console.log('Bem-vindo(a) à calculadora! \n');
    await calculatorMenu();
    rl.close();
}

main();










/*
Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, 

porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. 

Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima". */