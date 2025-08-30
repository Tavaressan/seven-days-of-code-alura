const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fruitsArray = [];
let dairyArray = [];
let frozenArray = [];
let dessertArray = [];

console.log('Bem vindo(a) à lista de compras! \n');

function question(text) {
    return new Promise((resolve) => {
        rl.question(text, (answer) => {
            resolve(answer);
        });
    });
}

async function addItem(){
    const addNewItem = await question('Você deseja adicionar uma comida na sua lista de compras? (sim ou não) \n');
        const wantToRemoveItem = await question('Você deseja remover um item da sua lista de compras? (sim ou não) \n');
        if (wantToRemoveItem == 'sim'){
            await removeItem();
        }
        if (addNewItem == 'não'){
            return;
        }
        const itemName = await question('Qual comida você deseja inserir? \n');
            const itemType = await question('Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados ou doces) \n');            
            switch (itemType){
                case 'frutas': {
                    fruitsArray.push(itemName)
                    break;
                }
                case 'laticínios': {
                    dairyArray.push(itemName)
                    break;
                }
                case 'congelados': {
                    frozenArray.push(itemName)
                    break;
                }
                case 'doces': {
                    dessertArray.push(itemName)
                    break;
                }
                default: {
                    console.log('Categoria inválida. Tente novamente.')
                    break;
                }
            }
        await addItem();
}

function listItems(){
    console.log('\nLista de compras:\n');
    console.log('Frutas: ');
    let fruitsString = fruitsArray.join(", ");
    console.log('   ' + fruitsString);

    console.log('Laticínios: ');
    let dairyString = dairyArray.join(", ");
    console.log('   ' + dairyString);

    console.log('Congelados: ');
    let frozenString = frozenArray.join(", ");
    console.log('   ' + frozenString);

    console.log('Doces: ');
    let dessertString = dessertArray.join(", ");
    console.log('   ' + dessertString);
    return;
}

async function removeItem(){
    const itemToRemove = await question('Qual item você quer remover? \n');

    const arrays = [fruitsArray, dairyArray, frozenArray, dessertArray];
    let itemFound = false;

    for (const array of arrays) {
        const index = array.indexOf(itemToRemove);
        if (index > -1) {
            const removedItem = array.splice(index, 1);
            console.log('O item ' + removedItem + ' foi removido da sua lista de compras.\n');
            itemFound = true;
            break;
        }
    }

    if (!itemFound){
        console.log('Esse item não se encontra na sua lista de compras.\n');
    }
    const wantToRemoveAnotherItem = await question('Você deseja remover um outro item da sua lista de compras? (sim ou não) \n');
    if (wantToRemoveAnotherItem.toLowerCase() === 'sim'){
        await removeItem();
    }
    return;
}

async function main() {
    await addItem();
    rl.close();
    listItems();
}

main();


/*Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho*/